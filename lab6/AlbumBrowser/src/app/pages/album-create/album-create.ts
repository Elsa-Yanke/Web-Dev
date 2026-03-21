import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AlbumService } from '../../services/album';

@Component({
  selector: 'app-album-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-create.html',
  styleUrl: './album-create.css',
})
export class AlbumCreateComponent {
  private router = inject(Router);
  private albumService = inject(AlbumService);

  userId = signal<number>(1);
  title = signal<string>('');

  creating = signal(false);
  error = signal('');

  private validate(): boolean {
    const uid = Number(this.userId());
    const t = this.title().trim();

    if (!uid || uid < 1 || uid > 10) {
      this.error.set('userId must be between 1 and 10');
      return false;
    }

    if (!t || t.length < 3) {
      this.error.set('title must be at least 3 characters');
      return false;
    }

    this.error.set('');
    return true;
  }

  create(): void {
    if (this.creating()) return;

    if (!this.validate()) return;

    this.creating.set(true);
    this.error.set('');

    const payload = {
      userId: Number(this.userId()),
      title: this.title().trim(),
    };

    this.albumService.createAlbum(payload).subscribe({
      next: () => {
        this.creating.set(false);
        this.router.navigate(['/albums']);
      },
      error: () => {
        this.error.set('Failed to create album');
        this.creating.set(false);
      },
    });
  }

  cancel(): void {
    this.router.navigate(['/albums']);
  }
}