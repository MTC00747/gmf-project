import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  slides = [
    { image: '/assets/LandingPageMiria/CARROSSEL/1.png' },
    { image: '/assets/LandingPageMiria/CARROSSEL/2.png' },
    { image: '/assets/LandingPageMiria/CARROSSEL/3.png'},
    { image: '/assets/LandingPageMiria/CARROSSEL/4.png'}
  ];
}

