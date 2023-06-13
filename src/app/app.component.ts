import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public navLinks: any[];

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Quality index',
        link: './air-quality-index',
        index: 0,
      },
      {
        label: 'UV Index',
        link: './uv-index',
        index: 1,
      },
    ];
  }
}
