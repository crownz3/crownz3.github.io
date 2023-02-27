import { Component, EnvironmentInjector, Inject, OnInit } from '@angular/core';
import { GoogleSigninService} from '../google-signin.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-g-login',
  templateUrl: './g-login.component.html',
  styleUrls: ['./g-login.component.css']
})
export class GLoginComponent implements OnInit {
  title = 'Qr Code Scanner';
  userInfo?: any;
  env = environment.path
  // http : any
  path:any
  constructor(private  googleApi: GoogleSigninService,private http: HttpClient) {
    googleApi.userProfileSubject.subscribe((info: any) => {
      console.log(googleApi.userProfileSubject)
      console.log(info)
      this.userInfo = info;
      this.path = this.env+'/api/login/saveLoginInfo'
      this.http.post(this.path,info, {headers: {'content-type':'application/json'}}).subscribe((res:any)=>{
        console.log(res)
        res.sucess ? alert("Succesfully") : alert('Nope')
      })
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
