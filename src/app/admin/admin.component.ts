import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GoogleSigninService } from '../google-signin.service';


declare let jsFile:any 


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})


export class AdminComponent implements OnInit {
  oAuthService: any;
  val = "pop"
  showLocations= false;
  constructor(private  googleApi: GoogleSigninService,) { }

  ngOnInit(): void {
    new jsFile()
  }

  

  logOut() {
    this.googleApi.signOut();
  }


  load(){


  }

  show(){
    this.showLocations = false ? this.showLocations === true : this.showLocations === false
  }

  hide(){
    this.showLocations = false
  }

  

}
