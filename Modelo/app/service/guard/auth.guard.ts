import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot) {
        if (localStorage.getItem('currentUser')) return true;
        this.router.navigate(['/auth/login']);
        return false;
    }
}
