import { compileDeclareDirectiveFromMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from 'src/app/core/services/common.service';
import { environment } from 'src/environments/environment';
import { AuthInterface } from '../../interfaces/auth.interface';
import SpotifyWebApi from 'spotify-web-api-js';
import { GlobalEnvironment } from 'src/app/shared/global.environment';
import { LoadingUtil } from '../../utils/loading.util';
import { ToastUtil } from '../../utils/toast.util';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

declare var cordova: any;
@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  spotifyApi: any;
  public userServiceSubscribe = new Subject<boolean>();

  constructor(
    private commonService: CommonService, 
    private navCtrl: NavController, 
    private loadingUtil: LoadingUtil,
    private toastUtil: ToastUtil,
    private router: Router
  ) { 
    console.log('loading', GlobalEnvironment.auth);
    this.spotifyApi = new SpotifyWebApi();
    this.spotifyApi.setAccessToken(GlobalEnvironment.auth?.accessToken);
  }

  forget() {
    cordova.plugins.spotifyAuth.forget();
  }
  
  /**
   * Connect with api of spotify.
   */
  auth(refresh: boolean) {
    const config = {
      clientId: environment.apis.spotify.clientId,
      redirectUrl: environment.scheme + '://callback',
      scopes: ['streaming', 'user-library-read','playlist-modify-public','playlist-modify-public','playlist-read-private', 'user-read-email', 'user-follow-modify', 'user-follow-read', 'user-read-private', 'user-library-modify'],
      tokenExchangeUrl: environment.apis.spotify.urlResponse.tokenExchangeUrl,
      tokenRefreshUrl: environment.apis.spotify.urlResponse.tokenRefreshUrl
    };
    if(refresh) {
      cordova.plugins.spotifyAuth.forget();
    }

    cordova.plugins.spotifyAuth.authorize(config)
      .then(async (auth: AuthInterface) => {
        await this.loadingUtil.init();
        console.log(auth);
        if(auth.accessToken) {
          auth.loggedIn = true;
          this.spotifyApi.setAccessToken(auth.accessToken);
          await this.getUser();
          this.commonService.setAuth(auth);
          await this.loadingUtil.dismiss();
          this.navCtrl.navigateForward(['home']);
        }else{
          await this.loadingUtil.dismiss();
          cordova.plugins.spotifyAuth.forget();
          this.toastUtil.show('Retry login.', 'danger');
        }
      })
      .catch(err => {
        cordova.plugins.spotifyAuth.forget();
      })
  }

  async getUser() {
    GlobalEnvironment.userSpotify = await this.spotifyApi.getMe()
      .then((data: SpotifyApi.CurrentUsersProfileResponse) => {
      return data;
    }, err => {
      console.error(err);
    });  
    this.commonService.setUser(GlobalEnvironment.userSpotify);
    this.userServiceSubscribe.next(true);
  }
}
