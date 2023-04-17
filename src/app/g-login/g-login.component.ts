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
  userInfo?: any;
  baseUrl = environment.serverBaseUrl
  path:any
  constructor(private  googleApi: GoogleSigninService,private http: HttpClient) {
    googleApi.userProfileSubject.subscribe((info: any) => {
      this.userInfo = info;
      this.path = this.baseUrl+'/saveLoginInfo'
      this.http.post(this.path,info, {headers: {'content-type':'application/json'}}).subscribe((res:any)=>{
        console.log(res)
        res.sucess ? alert("Succesfully") : alert('Nope')
      })
    });
  }


  ngOnInit(): void {
  }


 

  logOut() {
    this.googleApi.signOut();
  }
  
}
