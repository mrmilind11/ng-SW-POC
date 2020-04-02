import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageOrderRoutingModule } from './manage-order-routing.module';
import { ManageOrdersContainerComponent } from './components/manage-orders-container/manage-orders-container.component';


@NgModule({
  declarations: [ManageOrdersContainerComponent],
  imports: [
    CommonModule,
    ManageOrderRoutingModule
  ]
})
export class ManageOrderModule { }
