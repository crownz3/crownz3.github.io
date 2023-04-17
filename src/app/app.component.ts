import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GoogleSigninService } from './google-signin.service';
import { localStorage } from './service/localStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  baseUrl = environment.serverBaseUrl;
  userInfo: any;

  constructor(
    private http: HttpClient,
    private googleApi: GoogleSigninService,
    private local: localStorage,
    private routes: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.googleApi.userProfileSubject.subscribe((info: any) => {
      this.userInfo = info;
      this.http
        .post(this.baseUrl + 'login/saveLoginInfo', this.userInfo)
        .subscribe((res: any) => {
          this.local.setLocal('createdBy' , res.result.createdBy)
          this.local.setLocal('userType', res.result.userType);
          setTimeout(() => {
            if (this.local.getLocal('userType') === 'admin') {
              this.routes.navigateByUrl('admin');
            } else {
              this.route.queryParams.subscribe((res:any)=>{
                console.log(res.q)
              })

              this.routes.navigateByUrl('user');
            }
          }, 200);
        });
    });


  }
}
