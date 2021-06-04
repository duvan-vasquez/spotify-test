import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/core/services/spotify/category.service';
import { FollowService } from 'src/app/core/services/spotify/follow.service';
import { UserService } from 'src/app/core/services/spotify/user.service';
import { LoadingUtil } from 'src/app/core/utils/loading.util';

@Component({
  selector: 'app-music-tab',
  templateUrl: './music-tab.page.html',
  styleUrls: ['music-tab.page.scss'],
})
export class MusicTabPage implements OnInit {

  categories: SpotifyApi.CategoryObject[];
  items: SpotifyApi.TrackObjectFull[] = [];
  title: string = 'Music';

  constructor(private categoryService: CategoryService, private loadingUtil: LoadingUtil) {}
  
  ngOnInit(): void {
    this.loadList();
    this.categoryService.categoryServiceSubscribe.subscribe(async (res) => {
      if (res) {
        console.log('Suscribe', res);
        this.items = this.categoryService.listCategories;
      }
    });
  }

  async loadList() {
    await this.loadingUtil.init();
    this.items = this.categoryService.listCategories;
    console.log('Loading', this.items);
    await this.loadingUtil.dismiss();
  }
}