import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.css']
})
export class LandingPageComponentComponent {
  isMobileView: boolean = false;

  ngOnInit() {
    this.checkView();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkView();
  }

  checkView() {
    this.isMobileView = window.innerWidth <= 768;
  }
}
