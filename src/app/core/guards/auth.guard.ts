import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> |  Promise<boolean | UrlTree> | boolean | UrlTree {

    /** No-login. */
    if(state.url.indexOf('login') == -1 && false) {
      console.log(route, state.url, state.url.indexOf('login'));
    }
    return true;
  }
  
}
