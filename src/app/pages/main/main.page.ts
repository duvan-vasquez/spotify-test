import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { CategoryService } from 'src/app/core/services/spotify/category.service';
import { FollowService } from 'src/app/core/services/spotify/follow.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['main.page.scss'],
})
export class MainPage implements OnInit {
  spotifyApi: any;
  @ViewChild(IonTabs) tabs: IonTabs;
  selected: string = '';
  list: [];
  constructor(private categoryService: CategoryService, private followService: FollowService) { }

  ngOnInit(): void {
    this.loadList();
  }

  async loadList() {
    await this.followService.get().then(() => { });
    await this.categoryService.getRecommendation().then(() => { })
    await this.categoryService.categoryServiceSubscribe.next(true);
  }

  setTab() {
    console.log('load data');
    this.selected = this.tabs.getSelected();
  }

}
