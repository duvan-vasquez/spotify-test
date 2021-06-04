import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthorizeService } from './authorize.service';

declare var cordova: any;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    listCategories: SpotifyApi.TrackObjectFull[] = [];
    public categoryServiceSubscribe = new Subject<boolean>();

    constructor(private authorizeService: AuthorizeService) {}

    async get(): Promise<SpotifyApi.CategoryObject[]> {
        return await this.authorizeService.spotifyApi.getCategories({
            offset: 0,
            limit: 30
          })
          .then((res: SpotifyApi.MultipleCategoriesResponse) => {
              return res.categories.items;
          });
    }
    async getById(id: string): Promise<SpotifyApi.PlaylistObjectSimplified[]> {
        return await this.authorizeService.spotifyApi.getCategoryPlaylists(id)
          .then((res: SpotifyApi.CategoryPlaylistsResponse) => {
              return res.playlists.items;
          });
    }

    async getRecommendation() {
        this.listCategories = await this.authorizeService.spotifyApi.getRecommendations({
            limit: 30,
            seed_genres: 'pop'
        })
          .then((res: SpotifyApi.RecommendationsFromSeedsResponse) => {
              return res.tracks;
          });
        
    }
}

