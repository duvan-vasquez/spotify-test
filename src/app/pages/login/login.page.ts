import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, Platform } from '@ionic/angular';
import { CommonService } from 'src/app/core/services/common.service';
import { AuthorizeService } from 'src/app/core/services/spotify/authorize.service';
import { GlobalEnvironment } from 'src/app/shared/global.environment';

declare var cordova: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logo = '../assets/general/logo.png';

  constructor(
    private commonService: CommonService, 
    private authorizeService: AuthorizeService,
    private navCtrl: NavController,
    private plt: Platform) { 
      plt.ready().then(async () => {
        //await this.commonService.loadAuth();
        /** Review Token Expire or redirect to home. */
        console.log(GlobalEnvironment.auth);
      });
    }

  ngOnInit() {
  }

  onConnect() {
    this.authorizeService.auth(true);
  }
}
