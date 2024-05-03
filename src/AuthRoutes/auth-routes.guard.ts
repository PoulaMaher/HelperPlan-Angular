import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Loginservice } from '../app/components/login/LoginService/loginservice.service';

@Injectable({
  providedIn: 'root',
})
export class authRoutesGuard implements CanActivate {
  constructor(private authService: Loginservice, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.IsLogged) {
      return true;
    } else {
      this.router.navigate(['/Login']);
      return false;
    }
  }
}
