import { Component, OnInit, ViewChild } from '@angular/core';
import { FollowService } from 'src/app/core/services/spotify/follow.service';
import { LoadingUtil } from 'src/app/core/utils/loading.util';

@Component({
  selector: 'app-favorite-tab',
  templateUrl: './favorite-tab.page.html',
  styleUrls: ['favorite-tab.page.scss'],
})
export class FavoriteTabPage implements OnInit {

  title: string = "Favorite";

  items: SpotifyApi.SavedTrackObject[] = [];


  constructor(private followService: FollowService, private loadingUtil: LoadingUtil) { }

  ngOnInit(): void {
    console.log('Favorite component.');
    this.loadList();
    this.followService.followServiceSubscribe.subscribe(async (res) => {
      if (res) {
        this.items = this.followService.listFollowers;
      }
    });
  }

  removeTrack(item: SpotifyApi.SavedTrackObject) {
    this.followService.unFollow(item.track.id).then(() => { });
  }

  async loadList() {
    await this.loadingUtil.init();
    this.items = this.followService.listFollowers;
    await this.loadingUtil.dismiss();
  }

}