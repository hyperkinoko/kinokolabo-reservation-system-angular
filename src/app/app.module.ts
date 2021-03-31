import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { PasswordResetPageComponent } from './pages/auth/password-reset-page/password-reset-page.component';
import { SignupPageComponent } from './pages/auth/signup-page/signup-page.component';
import { ReservationListItemComponent } from './parts/reservation-list-item/reservation-list-item.component';
import { DatetimeJpPipe } from './pipes/datetime-jp.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MDBBootstrapModulesPro, MDBSpinningPreloader} from 'ng-uikit-pro-standard';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireAuthGuardModule} from "@angular/fire/auth-guard";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import { MembershipAgreementModalComponent } from './parts/modals/membership-agreement-modal/membership-agreement-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PasswordResetPageComponent,
    SignupPageComponent,
    ReservationListItemComponent,
    DatetimeJpPipe,
    MembershipAgreementModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFirestoreModule,
    MDBBootstrapModulesPro.forRoot(),
  ],
  providers: [
    MDBSpinningPreloader,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
