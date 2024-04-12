import {
  type SongCreateDto,
  type Song,
  type SongUpdateDto,
} from '../entities/song';
import createDebug from 'debug';

const debug = createDebug('W6E:repository:song');

// eslint-disable-next-line @typescript-eslint/naming-convention
const SONGS: Song[] = [
  { id: '1', title: 'Mardy Bum', author: 'Arctic Monkeys', year: 1900 },
  { id: '2', title: 'Laika', author: 'Arcade Fire', year: 1900 },
  { id: '3', title: 'We Will Rock You', author: 'Queen', year: 1900 },
];

export class SongMemoryRepository {
  songs = SONGS;
  constructor() {
    debug('Instanciated song memory repository');
  }

  readAll() {
    return this.songs;
  }

  readById(id: string) {
    return this.songs.find((song) => song.id === id);
  }

  create(data: SongCreateDto) {
    const newSong: Song = {
      id: (this.songs.length + 1).toString(),
      title: data.title,
      author: data.author,
      year: data.year,
    };
    this.songs = [...this.songs, newSong];
    return newSong;
  }

  update(id: string, data: Partial<SongUpdateDto>) {
    const song = this.songs.find((song) => song.id === id);
    if (!song) {
      throw new Error(`Song ${id} not found`);
    }

    const newSong = { ...song, ...data };
    this.songs = this.songs.map((song) => (song.id === id ? newSong : song));
    return newSong;
  }

  delete(id: string) {
    const song = this.songs.find((song) => song.id === id);
    this.songs = this.songs.filter((song) => song.id !== id);
    return song;
  }
}
