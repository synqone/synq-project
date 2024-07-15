import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact-mobile',
  templateUrl: './contact-mobile.component.html',
  styleUrls: ['./contact-mobile.component.css']
})
export class ContactMobileComponent {
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
