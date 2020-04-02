import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProductsRoutingModule } from './manage-products-routing.module';
import { ManageProductsContainerComponent } from './components/manage-products-container/manage-products-container.component';


@NgModule({
  declarations: [ManageProductsContainerComponent],
  imports: [
    CommonModule,
    ManageProductsRoutingModule
  ]
})
export class ManageProductsModule { }
