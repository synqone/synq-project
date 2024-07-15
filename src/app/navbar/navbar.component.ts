import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMobileView: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.isContactUsRoute()
    this.checkView();
  
   
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkView();
  }

  checkView() {
    this.isMobileView = window.innerWidth < 768;
  }
  isContactUsRoute(): boolean {
    const routes = ['contact_us', 'user', 'business'];
    return routes.some(route => this.router.url.includes(route));
  }
  

}
