import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-user-benefits',
  templateUrl: './user-benefits.component.html',
  styleUrls: ['./user-benefits.component.css']
})
export class UserBenefitsComponent {
  isMobileView: boolean = false;

  ngOnInit() {
    this.checkView();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkView();
  }

  checkView() {
    this.isMobileView = window.innerWidth < 768;
  }

}
