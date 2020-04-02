import { AdminDashboardContainerComponent } from './components/admin-dashboard-container/admin-dashboard-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', pathMatch: 'full', component: AdminDashboardContainerComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
