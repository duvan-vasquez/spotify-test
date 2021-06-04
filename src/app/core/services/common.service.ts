import { StorageService } from './storage.service';
import { NavController, Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { AuthInterface } from '../interfaces/auth.interface';
import { GlobalEnvironment } from 'src/app/shared/global.environment';
import { AuthorizeService } from './spotify/authorize.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    auth: AuthInterface;

    constructor(
        private lStorage: StorageService,
        private navCtrl: NavController,
        private plCtrl: Platform,
        private router: Router
    ) { }

    async loadAuth() {
        if(!GlobalEnvironment.auth) {
            await this.lStorage.getItem(environment.definitions.authToken).then(res => {
                GlobalEnvironment.auth = res;
            });
        }
    }

    async loadUser() {
        if(!GlobalEnvironment.userSpotify) {
            await this.lStorage.getItem(environment.definitions.userSpotify).then(res => {
                GlobalEnvironment.userSpotify = res;
            });
        } 
    }

    setUser(user: SpotifyApi.CurrentUsersProfileResponse) {
        this.lStorage.setItem(environment.definitions.userSpotify, user);
    }

    setAuth(auth: AuthInterface) {
        this.lStorage.setItem(environment.definitions.authToken, auth);
    }

    logout(): void {
        this.lStorage.removeItem(environment.definitions.authToken);
        this.lStorage.removeItem(environment.definitions.userSpotify);
        this.navCtrl.navigateForward(['login']);
    }

    getToken(): string {
        return GlobalEnvironment.auth?.accessToken ?? '';
    }

    async isAuth() {
        console.log('is auth', GlobalEnvironment.auth);
        return await this.lStorage.getItem(environment.definitions.authToken);
    }
}
