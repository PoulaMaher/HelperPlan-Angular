import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Loginservice } from '../app/components/login/LoginService/loginservice.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class loginInGuard implements CanActivate {
  constructor(private authService: Loginservice, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.authService.IsLogged) {
      return true;
    } else {
      this.router.navigateByUrl('/home');
      return false;
    }
  }
};
