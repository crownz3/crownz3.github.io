import { Component, OnInit } from '@angular/core';
import { GoogleSigninService, UserInfo } from '../google-signin.service';

@Component({
  selector: 'app-g-login',
  templateUrl: './g-login.component.html',
  styleUrls: ['./g-login.component.css']
})
export class GLoginComponent implements OnInit {
  title = 'Qr Code Scanner';
  userInfo?: UserInfo;
  
  constructor(private  googleApi: GoogleSigninService) {
    googleApi.userProfileSubject.subscribe((info: any) => {
      this.userInfo = info;
    });
  }
  ngOnInit(): void {
  }
  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn();
  }

  logOut() {
    this.googleApi.signOut();
  }
  
}
