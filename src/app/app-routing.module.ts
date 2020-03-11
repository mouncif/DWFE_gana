import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from "./views/content/content.component"
import { ListclientsComponent } from './views/listclients/listclients.component';
import { AdminComponent } from './views/admin/admin.component';
import {ProduitComponent}  from './views/produit/produit.component';
import {ListproduitsComponent} from './views/listproduits/listproduits.component';
import { FournisseurComponent } from './views/fournisseur/fournisseur.component';
import { ListfournisseursComponent } from './views/listfournisseurs/listfournisseurs.component';

const routes: Routes = [
 
  {path:"",component:AdminComponent},
  {path :"list", component:ListclientsComponent },
  {path :"produit", component:ProduitComponent },
  {path :"listproduit", component:ListproduitsComponent },
  {path :"fournisseur", component:FournisseurComponent },
  {path :"listfournisseur", component:ListfournisseursComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
