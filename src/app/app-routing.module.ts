import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from "./views/content/content.component"
import { ListclientsComponent } from './listclients/listclients.component';
import { AdminComponent } from './views/admin/admin.component';


const routes: Routes = [
 
  {path:"",component:AdminComponent},
  {path :"list", component:ListclientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
