import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthorizeService } from './authorize.service';

declare var cordova: any;
@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private authorizeService: AuthorizeService) { }

  listFollowers: SpotifyApi.SavedTrackObject[] = [];
  public followServiceSubscribe = new Subject<boolean>();

  setFollow(id: string) {
    return this.authorizeService.spotifyApi.addToMySavedTracks([id])
      .then(async data => {
        const indexItem = this.listFollowers.findIndex(p => p.track.id === id);
        if (indexItem === -1) {
          const item = await this.getTrack(id);
          this.listFollowers.unshift({ added_at: '', track: item });
          this.followServiceSubscribe.next(true);
        }
      }, err => {
        console.error(err);
      });
  }

  async unFollow(id: string) {
    return this.authorizeService.spotifyApi.removeFromMySavedTracks([id])
      .then(data => {
        const indexItem = this.listFollowers.findIndex(p => p.track.id === id);
        if (indexItem !== -1) {
          this.listFollowers.splice(indexItem, 1);
          this.followServiceSubscribe.next(true);
        }
        //this.list = data.items;
      }, err => {
        console.error(err);
      });
  }

  async get() {
    this.listFollowers = await this.authorizeService.spotifyApi.getMySavedTracks({
      offset: 0,
      limit: 50
    })
      .then((res: SpotifyApi.UsersSavedTracksResponse) => {
        return res.items;
      })
      .catch(err => {
        return [];
      });
  }

  async getTrack(id: string) {
    return await this.authorizeService.spotifyApi.getTrack(id)
      .then((res: SpotifyApi.SingleTrackResponse) => {
        return res;
      });
  }
}