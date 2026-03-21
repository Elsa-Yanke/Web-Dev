import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class AlbumsComponent implements OnInit {
  albums$!: Observable<Album[] | null>;  // 👈 без this.albumService тут
  error = '';

  constructor(private albumService: AlbumService) {
    this.albums$ = this.albumService.albums$; // 👈 теперь ок
  }

  ngOnInit(): void {
    this.albumService.loadAlbumsOnce();
  }

  deleteAlbum(id: number): void {
    this.error = '';
    this.albumService.deleteAlbum(id).subscribe({
      error: () => (this.error = 'Failed to delete album'),
    });
  }
}