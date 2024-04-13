import { Injectable } from '@angular/core';
import { ApiRepoService } from './api-repo.service';
import { BehaviorSubject } from 'rxjs';
import { Song } from './model/song';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private songList$: BehaviorSubject<Song[]> = new BehaviorSubject<Song[]>([]);

  constructor(private ApiRepoSrv: ApiRepoService) {}

  private fetchData() {
    this.ApiRepoSrv.getData().subscribe((data) => {
      this.songList$.next(data);
    });
  }

  getData() {
    this.fetchData();
    return this.songList$.asObservable();
  }
}
