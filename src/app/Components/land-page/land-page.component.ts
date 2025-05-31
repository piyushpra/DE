import { trigger, state, style, transition, animate, stagger, query, keyframes } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { brands } from "../../brands";
declare var jQuery: any;

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css'],
  animations: []
})
export class LandPageComponent implements OnInit {

  bubbles: Boolean = false;
  fallDown: Boolean = false;
  fadeIn: Boolean = false;
  popIn: Boolean = false;
  public brandList: brands[];

  constructor() {
    this.brandList = [
      {
        titles: "Brand1"
      },{
        titles: "Brand2"
      }, {
        titles: "Brand3"
      }, {
        titles: "Brand4"
      }, {
        titles: "Brand5"
      }, {
        titles: "Brand6"
      }
    ]

    if (window.innerWidth < 1024) {
      this.bubbles = true;
    }

  }

  goUp() {
    let showUp = document.querySelector(".service")?.getBoundingClientRect().height;
    document.documentElement.scrollBy(0, <number>showUp);
    console.log(showUp);

    if (this.bubbles == false) {
      this.bubbles = true;
    }
    else {
      this.bubbles = false;
    }
  }

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function () {
        $('#secure-payments').hover(function () {
          $('.service-bg').css({
            'background': 'url(../../../assets/images/bg_gif_1.gif)',
            'background-repeat': 'no-repeat', 'background-size': 'cover', 'background-position': 'center',
            'transition': 'all 0.5s'
          })
        })
        $('#fast-service').hover(function () {
          $('.service-bg').css({
            'background': 'url(../../../assets/images/bg_gif_2.gif)',
            'background-repeat': 'no-repeat', 'background-size': 'cover', 'background-position': 'center',
            'transition': 'all 0.5s'
          })
        })
        $('#award-winning').hover(function () {
          $('.service-bg').css({
            'background': 'url(../../../assets/images/bg_gif_3.gif)',
            'background-repeat': 'no-repeat', 'background-size': 'cover', 'background-position': 'center',
            'transition': 'all 0.5s'
          })
        })
        $('#affordable-services').hover(function () {
          $('.service-bg').css({
            'background': 'url(../../../assets/images/bg_gif_4.gif)',
            'background-repeat': 'no-repeat', 'background-size': 'cover', 'background-position': 'center',
            'transition': 'all 0.5s'
          })
        })
      });
    })(jQuery);
  }

  @HostListener("window: innerWidth") width(): void {
    // console.log(document.querySelector('#showUp')?.getBoundingClientRect());
  }


  @HostListener('window:scroll', []) onScroll(): void {

    let showUp = document.querySelector("#showUp")?.getBoundingClientRect().top;
    let service = document.querySelector(".service")?.getBoundingClientRect().top;
    let whyUsSection = document.querySelector(".why-us-section")?.getBoundingClientRect().top;

    if (showUp !== undefined && showUp < 500) {
      this.bubbles = true;
    } else {
      this.bubbles = false;
    }
  
    if (service !== undefined && service < 500) {
      this.fallDown = true;
    } else {
      this.fallDown = false;
    }
    
    if (whyUsSection !== undefined && whyUsSection < 600) {
      let getDiv = document.querySelector('.why-us-section>div');
      if (getDiv) {
        (getDiv as HTMLElement).style.opacity = "1";
      }
      this.fadeIn = true;
      this.popIn = true;
    } else {
      let getDiv = document.querySelector('.why-us-section>div');
      if (getDiv) {
        (getDiv as HTMLElement).style.opacity = "0";
      }
      this.fadeIn = false;
      this.popIn = false;
    }

  }

}
