import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
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
