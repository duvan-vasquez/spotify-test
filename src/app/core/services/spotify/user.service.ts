import { Injectable } from '@angular/core';
import { GlobalEnvironment } from 'src/app/shared/global.environment';
import { CommonService } from '../common.service';
import { AuthorizeService } from './authorize.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    user: SpotifyApi.CurrentUsersProfileResponse;

    constructor(private authorizeService: AuthorizeService, private commonService: CommonService) {}

    async getUserPlayList() {
        return await this.authorizeService.spotifyApi.getUserPlaylists(GlobalEnvironment.userSpotify.id)
        .then((data: SpotifyApi.ListOfUsersPlaylistsResponse) => {
          return data.items;
        }, err => {
          console.error(err);
        });
      }

}