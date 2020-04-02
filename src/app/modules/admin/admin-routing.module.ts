import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule) },
  { path: 'manageProduct', pathMatch: 'full', loadChildren: () => import('./manage-products/manage-products.module').then(m => m.ManageProductsModule) },
  { path: 'manageOrder', pathMatch: 'full', loadChildren: () => import('./manage-order/manage-order.module').then(m => m.ManageOrderModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
