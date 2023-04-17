import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule, OAuthService, UrlHelperService } from 'angular-oauth2-oidc';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GLoginComponent } from './g-login/g-login.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './layout/admin/admin.module';
import { UserModule } from './layout/user/user.module';
import { GoogleSigninService } from './google-signin.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { MatTableModule } from '@angular/material/table'  
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonSharedModule } from './layout/commonSharedModule';
import { UserComponent } from './layout/user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    GLoginComponent,
    UserComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    UserModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    CommonSharedModule,
    AdminModule,
  ],
  providers: [OAuthService, GoogleSigninService, UrlHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
