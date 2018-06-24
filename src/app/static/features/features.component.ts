import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

@Component({
  selector: 'anms-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;
  products;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('./assets/mock/products.json')
      .subscribe((response: any) => {
        this.products = response.data;
      });
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
