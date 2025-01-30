import { Component, HostListener, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable()

export class HeaderComponent implements OnInit {

  headerSticky: boolean = false;
  isHeightFull: boolean = false;
  isHide: boolean = false;
  isMenuCollapsed: boolean = false;
  constructor() {
  }

  @HostListener('window:scroll') onScroll(): void {
    if (document.documentElement.scrollTop > 0) {
      document.querySelector('header')?.setAttribute("style","position: sticky; height: 100px; top: 0;")
      document.querySelector('.top-header')?.setAttribute("style","height: 0%;")
      document.querySelector('.menu-header')?.setAttribute("style","height: 100%!important; ")
    } else {
      document.querySelector('header')?.setAttribute("style","position: relative; height: 125px")
      document.querySelector('.top-header')?.setAttribute("style","height: 30%;")
      document.querySelector('.menu-header')?.setAttribute("style","height: 70%!important; ")
    }
  }

  ngOnInit(): void {
  }

}