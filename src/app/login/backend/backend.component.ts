import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookiesHelper } from '../../cookies-helper';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {

  constructor(private router : Router, private http: HttpClient) { }

  ngOnInit() {
  }

  loginData = {
    userId : '',
    password : ''
  };

  loginOutput:any={};
  cookiesHelper = new CookiesHelper();

  doLogin() {

    this.http.post('http://localhost:55643/api/Auth/Login', this.loginData).subscribe(res => {
      // console.log(res);
      this.loginOutput = res;

      if(this.loginOutput.uToken != null){
        //將UToken放入Cookie中
        this.cookiesHelper.setCookie('uToken', this.loginOutput.uToken, 20*60*1000)
        this.router.navigate(['/feedback/list']);
      }
      else{
        alert(this.loginOutput.result);
      }
    })
  };

}
