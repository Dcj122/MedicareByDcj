import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PaymentComponent } from './payment/payment.component';
import { TicketComponent } from './ticket/ticket.component';
import { MedicineComponent } from './medicine/medicine.component';
import { HttpClientModule } from '@angular/common/http';
import { BackgroundImageComponent } from './background-image/background-image.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    MoviesComponent,
    HomeComponent,
    DetailsComponent,
    PaymentComponent,
    TicketComponent,
    MedicineComponent,
    BackgroundImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, BackgroundImageComponent]
})
export class AppModule { }
