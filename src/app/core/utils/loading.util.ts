import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { LoadingController } from '@ionic/angular';
const { SplashScreen } = Plugins;

@Injectable({
    providedIn: 'root'
})
export class LoadingUtil {

    public loading: any;

    constructor(private loadingCtrl: LoadingController) {}

    async init() {
        this.loading = await this.loadingCtrl.create();
        await this.loading.present();
    }
    dismiss() {
        this.loading.dismiss();
    }
}