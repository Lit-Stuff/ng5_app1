import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

@Component({
  selector: 'anms-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  selectedItems = [
    {
      id: 1,
      name: 'Sleeveless Jersey Dress',
      description: 'Sleeveless dresses in jersey with a printed design. Seam at waist and flared skirt.',
      points: 450,
      img: 'http://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FG00%200553873%20022%2099%201d6e98a66038f41dad8db68c38b0816514d634df.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D'
    },
    {
      id: 2,
      name: 'Fine-knit Bolero',
      description: 'Bolero in fine-knit cotton with a faceted, heart-shaped button. Long-sleeves with ribbed cuffs.',
      points: 850,
      img: 'http://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FG00%200619158%20001%2099%202020cb585dd9b9fc18a1033dda22cb475757661f.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {

  }

  handleDeletItem(item) {
    console.log(item);
    this.selectedItems = this.selectedItems
      .filter(selecteditem => selecteditem.id !== item.id);
  }

}
