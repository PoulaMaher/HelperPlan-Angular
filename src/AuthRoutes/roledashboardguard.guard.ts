import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Loginservice } from '../app/components/login/LoginService/loginservice.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class roledashboardguardGuard implements CanActivate {
  constructor(private authService: Loginservice, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.LoggedUser.value != null) {
      if (
        this.authService.LoggedUser.value![
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ] == 'Admin'
      ) {
        return true;
      } else {
        this.router.navigateByUrl('/home')
        return false;
      }
    }
    this.router.navigateByUrl('/Login')
    return false;
  }
}
