import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/core/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private commonService: CommonService,
    private navCtrl: NavController) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    /** No-login. */
    return new Promise((resolve) => {
      this.commonService.isAuth()
        .then(res => res?.accessToken)
        .then((token) => {
          if (token) {//Valid token
            resolve(true);
          }else {
            this.navCtrl.navigateForward('login');
            resolve(false);
          }
        })
        .catch(err => {
          resolve(false);
        });
    })
  }

}
