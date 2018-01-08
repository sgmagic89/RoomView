import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public router: Router) {

     }

    /**
    * canActive() - Checks if user is having access to a parent component to which user is trying to route
    * Its used in routing module to determine whether a routing request is valid or not
    * @param <None> No Parameter
    * @return <boolean> Return true/false
    */
    canActivate(): boolean {
        return true;
    }

    /**
    * canActiveChild() - Checks if user is having access to a child component to which user is trying to route
    * Its used in routing module to determine whether a routing request is valid or not
    It internally calls the canActive Function to impose the same logic
    * @param <None> No Parameter
    * @return <boolean> Return true/false
    */
    canActivateChild(): boolean {
        return this.canActivate();
    }

}
