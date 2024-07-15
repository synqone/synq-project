import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponentComponent } from './layout/landing-page-component/landing-page-component.component';
import { UserBenefitsComponent } from './layout/user-benefits/user-benefits.component';
import { BusinessBenefitsComponent } from './layout/business-benefits/business-benefits.component';
import { ContactMobileComponent } from './layout/contact-mobile/contact-mobile.component';

const routes: Routes = [

  {
    path:'',
    component:LandingPageComponentComponent
    
  },
  {
    path:'user',
    component:UserBenefitsComponent
  },
  {
    path:'business',
    component:BusinessBenefitsComponent
  },
  {
  path:'contact_us',
  component:ContactMobileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
