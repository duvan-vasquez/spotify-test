import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CommonService } from 'src/app/core/services/common.service';
import { AuthorizeService } from 'src/app/core/services/spotify/authorize.service';
import { GlobalEnvironment } from 'src/app/shared/global.environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.organism.html',
  styleUrls: ['menu.organism.scss'],
  providers: []
})

export class MenuOrganism implements OnInit{
  
  user: SpotifyApi.CurrentUsersProfileResponse;
  constructor(private commonService: CommonService, private menu: MenuController, private authorizeService: AuthorizeService) { }

  ngOnInit(): void {
    this.load();
    this.authorizeService.userServiceSubscribe.subscribe(async (res) => {
      if (res) {
        console.log(this.user);
        this.user = GlobalEnvironment.userSpotify;
      }
    });
  }
  async load() {
    await this.commonService.loadUser();
    this.user = GlobalEnvironment.userSpotify;
    console.log(this.user);
    
  }
  /*openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }*/
  
  logout() {
    console.log('logout');
    this.authorizeService.forget();
    this.commonService.logout();
  }
}