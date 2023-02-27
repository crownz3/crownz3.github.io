import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GoogleSigninService } from '../../google-signin.service';
import { DashboardFooterComponent } from '../../Dialogs/dashboard-footer/dashboard-footer.component';
import { MatDialog } from '@angular/material/dialog';
import {
  ActivatedRoute,
  ChildrenOutletContexts,
  Router,
} from '@angular/router';

// declare let jsFile:any

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  // animations:[
  //   slideInAnimation
  // ]
})
export class AdminComponent implements OnInit {
  oAuthService: any;
  val = 'pop';
  routeName = 'what about this page';
  showLocations = false;
  constructor(
    private googleApi: GoogleSigninService,
    public dialog: MatDialog,
    private contexts: ChildrenOutletContexts
  ) {}

  ngOnInit(): void {
    // new jsFile()

    const body = document.querySelector('.big-parent'),
      sidebar = body?.querySelector('.sidebar'),
      toggle = body?.querySelector('.toggle'),
      modeSwitch = body?.querySelector('.toggle-switch'),
      modeText = body?.querySelector('.mode-text');

    toggle?.addEventListener('click', () => {
      sidebar?.classList.toggle('close');
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
      } else {
        sidebar!.classList.remove('close');
        sidebar!.classList.add('open');
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

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }

  footerDialog() {
    const dialogRef = this.dialog.open(DashboardFooterComponent, {});

    dialogRef.afterOpened().subscribe((res) => {
      console.log('The EditForm is opened');
    });
  }
}
