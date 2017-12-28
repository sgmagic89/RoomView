import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public router: Router) {

     }


    canActivate(): boolean {
        return true;
    }

    canActivateChild(): boolean {
        return this.canActivate();
    }

}
