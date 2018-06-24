import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [SharedModule],
  exports: [],
  providers: [],
})
export class ComponentsModule {}