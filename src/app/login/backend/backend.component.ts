import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  loginData = {
    userName : '',
    password : ''
  };

  doLogin() {
    if(this.loginData.userName == 'sa' && this.loginData.password == '0000'){
      this.router.navigate(['/feedback/list']);
    }
    else{
      alert('登入失敗')
    }
  }

}
