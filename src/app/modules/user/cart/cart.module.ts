import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartContainerComponent } from './components/cart-container/cart-container.component';


@NgModule({
  declarations: [CartContainerComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule
  ]
})
export class CartModule { }
