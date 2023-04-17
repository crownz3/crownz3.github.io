import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GoogleSigninService } from '../../google-signin.service';
import { DashboardFooterComponent } from '../../Dialogs/dashboard-footer/dashboard-footer.component';
import { MatDialog } from '@angular/material/dialog';
import {
  ActivatedRoute,
  ChildrenOutletContexts,
  Router,
} from '@angular/router';
import { ProfileViewComponent } from 'src/app/Dialogs/profile-view/profile-view.component';
import { QrcodeComponent } from 'ngx-qrcode2';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AdminComponent implements OnInit {
  oAuthService: any;
  val = 'pop';
  routeName = 'what about this page';
  showLocations = false;
  constructor(
    private googleApi: GoogleSigninService,
    public dialog: MatDialog,
  ) {}


  ngOnInit(): void {
    const body = document.querySelector('.big-parent'),
      sidebar = body?.querySelector('.sidebar'),
      main = body?.querySelector('.main'),
      toggle = body?.querySelector('.toggle'),
      modeSwitch = body?.querySelector('.toggle-switch'),
      modeText = body?.querySelector('.mode-text');

    toggle?.addEventListener('click', () => {
      sidebar?.classList.toggle('close');
      main?.classList.toggle('open');
    });

    modeSwitch?.addEventListener('click', () => {
      body?.classList.toggle('dark');

      let val = body?.classList.contains('dark');
      if (val === true) {
        modeText!.textContent = 'Dark Mode';
      } else {
        modeText!.textContent = 'Light Mode';
      }
    });

    window.addEventListener('resize', () => {
      let screen = window.matchMedia('(max-width:600px)');
      let screenSize = screen.matches;

      if (screenSize) {
        sidebar!.classList.remove('open');
        sidebar!.classList.add('close');
        main!.classList.remove('open');
        main!.classList.add('close');
      } else {
        sidebar!.classList.remove('close');
        sidebar!.classList.add('open');
        main!.classList.remove('close');
        main!.classList.add('open');
      }
    });
  }

  logOut() {
    this.googleApi.signOut();
  }

  load() {}

  show() {
    // this.showLocations = false ? this.showLocations === true : this.showLocations === false
  }

  hide() {
    // this.showLocations = false
  }



  footerDialog() {
    const dialogRef = this.dialog.open(DashboardFooterComponent, {});

    dialogRef.afterOpened().subscribe((res) => {
      console.log('The EditForm is opened');
    });
  }

  openProfile(){
    const dialogRef = this.dialog.open(ProfileViewComponent, {
      maxHeight: '80vh',

    });

  }

 
}
