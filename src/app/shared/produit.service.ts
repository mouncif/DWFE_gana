import { Injectable } from '@angular/core';
import {FormGroup , FormControl,Validators} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import {produit} from "./../model/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(public clientHTTP:HttpClient) { }
  form : FormGroup = new FormGroup({
    id : new FormControl(null),
    nomP  : new FormControl(''),
    nomCP  : new FormControl('',Validators.required),
    prixBase  : new FormControl('',Validators.required),
    prixVente  : new FormControl(''),
    seuilMax  : new FormControl('',Validators.required),
    unite  : new FormControl(null),
    imageP  : new FormControl(''),
    qteInitial  :  new FormControl(null),
    qteActual  : new FormControl(null)

  });

 
private url = "http://localhost:3000/produits";

findAll(){
  return this.clientHTTP.get<produit[]>(this.url);
}

ajouter(produit){
  
  return this.clientHTTP.post<produit>(this.url,produit);
}
update(produit)
{
  return this.clientHTTP.put(`${this.url}/${produit.id}`,produit);
}
populateForm(row)
{
  this.form.setValue(row);

}
delete(rowid){
  return this.clientHTTP.delete(this.url+'/'+rowid);
}

initializeFormGroup() {
  this.form.setValue({
    id: null,
    nomP : '',
    nomCP : '',
    prixBase : '',
    prixVente : '',
    seuilMax : '',
    unite  : null,
    imageP  :'',
    qteInitial : null,
    qteActual : null
  
  });
}
}
