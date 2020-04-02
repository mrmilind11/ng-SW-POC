import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardContainerComponent } from './components/admin-dashboard-container/admin-dashboard-container.component';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';



@NgModule({
  declarations: [AdminDashboardContainerComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
