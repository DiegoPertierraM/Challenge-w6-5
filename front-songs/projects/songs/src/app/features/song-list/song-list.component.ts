import { Component, Input } from '@angular/core';
import { Song } from '../../core/services/model/song';

@Component({
  selector: 'isdi-song-list',
  standalone: true,
  imports: [],
  template: `
    <ul class="song-list">
      @for (song of songs; track $index) {
      <li>
        <ul class="song-card">
          <li>{{ song.title }}</li>
          <li>{{ song.author }}</li>
          <li>{{ song.year }}</li>
        </ul>
      </li>
      }
    </ul>
  `,
  styleUrl: './song-list.component.css',
})
export class SongListComponent {
  @Input() songs!: Song[];
}
