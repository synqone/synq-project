import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-business-benefits',
  templateUrl: './business-benefits.component.html',
  styleUrls: ['./business-benefits.component.css']
})
export class BusinessBenefitsComponent {
  isMobileView: boolean = false;

  ngOnInit() {
    this.checkView();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkView();
  }

  checkView() {
    this.isMobileView = window.innerWidth <768;
  }
}
