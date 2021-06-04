import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';import { ToastController } from '@ionic/angular';
3
const { SplashScreen } = Plugins;

@Injectable({
    providedIn: 'root'
})
export class ToastUtil {

    public loading: any;

    constructor(public toastCrtl: ToastController) {}

    async show(text: string, color: string= 'primary') {
        const toast = await this.toastCrtl.create({
            message: text,
            color: color,
            duration: 2000
          });
          toast.present();
    }
}

