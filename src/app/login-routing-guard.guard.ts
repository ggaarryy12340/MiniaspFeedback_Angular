import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookiesHelper } from './cookies-helper';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class LoginRoutingGuardGuard implements CanActivate {

  constructor(private http: HttpClient, private router: Router) { }

  cookiesHelper = new CookiesHelper();
  result: boolean = false;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {

      //從Cookie取得UToken
    let UToken:string=this.cookiesHelper.getCookie('uToken');

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('uToken', UToken);

    return this.http.get('http://localhost:55643/api/Auth/IsLogined', {headers: headers}).pipe(
      map((res) => {
        if(res['userId'] != null){
          return true;
        }
        else{
          //導到後台登入頁面
          alert(res['msg']);
          this.router.navigate(['backendLogin']);
        }
      })
    );

  }
}
