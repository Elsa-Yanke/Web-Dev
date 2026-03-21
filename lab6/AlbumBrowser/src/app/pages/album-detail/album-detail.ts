import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);

  album = signal<Album | null>(null);
  loading = signal(true);
  error = signal('');
  saving = signal(false);

  editedTitle = signal('');

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading.set(true);
    this.error.set('');

    this.albumService.getAlbum(id).subscribe({
      next: (a) => {
        this.album.set(a);
        this.editedTitle.set(a.title); // вот тут редактирование
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load album');
        this.loading.set(false);
      },
    });
  }

  save(): void {
    const current = this.album();
    if (!current) return;

    const title = this.editedTitle().trim();
    if (!title) {
      this.error.set('Title cannot be empty');
      return;
    }

    this.saving.set(true);
    this.error.set('');

    const updated: Album = { ...current, title };

    this.albumService.updateAlbum(updated).subscribe({
      next: (resp) => {
        // resp от JSONPlaceholder может не совпадать, но сервис сделает override
        this.album.set({ ...resp, title });
        this.editedTitle.set(title);
        this.saving.set(false);
      },
      error: () => {
        this.error.set('Failed to update album');
        this.saving.set(false);
      },
    });
  }

  back(): void {
    this.router.navigate(['/albums']);
  }
}