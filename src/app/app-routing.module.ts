import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './views/admin/admin.component';
import { ListclientsComponent } from './listclients/listclients.component';

const routes: Routes = [
  {path:"clients",component:AdminComponent},
  {path :"list", component:ListclientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
