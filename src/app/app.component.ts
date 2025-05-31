import { Component, HostListener } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isHeader: boolean = false;
  isFooter: boolean = false;
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if (this.currentRoute == "/" || this.currentRoute == "/admin" || this.currentRoute.charAt(1) == "#") {
          this.isHeader = false;  // this will hide header
          this.isFooter = false;  // this will hide header

        } else {
          this.isHeader = true;  // this will show header
          this.isFooter = true;  // this will show header
        }
      }
    });

  }

  ngOnInit() {
    // Listen for URL changes (router events)
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.onResize();
      }
    });

    // Initial check when component loads
    this.onResize();
  }

  @HostListener("window:resize") onResize() {
    if (this.currentRoute == "/") {
      if (window.innerWidth < 1024) {
        this.isHeader = true;
        this.isFooter = true;
      } else {
        this.isHeader = false;
        this.isFooter = false;
      }
    }
  }
}
