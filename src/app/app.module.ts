import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponentComponent } from './layout/landing-page-component/landing-page-component.component';
import { BusinessBenefitsComponent } from './layout/business-benefits/business-benefits.component';
import { ContactMobileComponent } from './layout/contact-mobile/contact-mobile.component';
import { UserBenefitsComponent } from './layout/user-benefits/user-benefits.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponentComponent,
    BusinessBenefitsComponent,
    ContactMobileComponent ,
    UserBenefitsComponent,
    NavbarComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
