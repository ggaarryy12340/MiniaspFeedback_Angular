import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginData = {
    TicketID : ''
  };

  constructor(private router : Router) { }

  ngOnInit() {
  }

  doLogin(){
    //比對會員資料確定是否有此課程票號

    // this.router.navigate(['/', 'create']);
    this.router.navigate(['feedback/create'], {queryParams:{
      TicketID : this.loginData.TicketID
    }});
  }

}
