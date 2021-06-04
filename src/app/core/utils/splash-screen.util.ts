import { Plugins } from '@capacitor/core';
import { LoadingController } from '@ionic/angular';
const { SplashScreen } = Plugins;

export class SplashScreenUtil {

    loading: LoadingController;

    /** Verify Splash in Android or Ios. */
    static hide() {
        if(SplashScreen) {
            console.log(SplashScreen);
            SplashScreen.hide();
            console.log("SplashScreen hide.");
        }
    }

    
}