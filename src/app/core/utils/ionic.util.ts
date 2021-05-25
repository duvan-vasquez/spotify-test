import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

export class IonicUtil {

    /** Verify Splash in Android or Ios. */
    static reviewSplash() {
        if(SplashScreen) {
            console.log(SplashScreen);
            SplashScreen.hide();
            console.log("SplashScreen hide.");
        }
    }
}