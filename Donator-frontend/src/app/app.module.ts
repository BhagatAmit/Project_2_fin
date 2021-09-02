import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDonationComponent } from './create-donation/create-donation.component';
import { UpdateDonationComponent } from './update-donation/update-donation.component';
import { DonationListComponent } from './donation-list/donation-list.component';
import { DonationService } from './donationservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DonatorLoginComponent } from './donator-login/donator-login.component';
import { DonatorHomeComponent } from './donator-home/donator-home.component';
import { DonatorMainComponent } from './donator-main/donator-main.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDonationComponent,
    UpdateDonationComponent,
    DonationListComponent,
    RegistrationComponent,
    DonatorLoginComponent,
    DonatorHomeComponent,
    DonatorMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DonationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
