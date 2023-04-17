import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GoogleSigninService } from '../../google-signin.service';
import { DashboardFooterComponent } from '../../Dialogs/dashboard-footer/dashboard-footer.component';
import { MatDialog } from '@angular/material/dialog';
import { ProfileViewComponent } from 'src/app/Dialogs/profile-view/profile-view.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UserComponent implements OnInit {
  oAuthService: any;
  val = 'pop';
  showLocations = false;
  constructor(
    private googleApi: GoogleSigninService,
    public dialog: MatDialog
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

  // getRouteAnimationData() {
  //   return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  // }

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
