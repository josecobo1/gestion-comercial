import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
/* import { NotfoundComponent } from './../../../../bcncodes/projects/gest-comercial/src/app/commons/notfound/notfound.component'; */
import { HomeComponent } from './commons/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './commons/notfound/notfound.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent },
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'customer', component: CustomerListComponent,
    children:[
      {path:':id', component: CustomerDetailComponent}] },
/*   {path:'customer/:id', component: CustomerDetailComponent}, */
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
