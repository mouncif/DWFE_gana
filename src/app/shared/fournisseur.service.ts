import { Injectable } from '@angular/core';
import {FormGroup , FormControl,Validators} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import {fournisseur} from "./../model/fournisseur";
@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(public clientHTTP:HttpClient) { }
  form : FormGroup = new FormGroup({
    id : new FormControl(null),
    nomF   : new FormControl(''),
    nomCF   : new FormControl('',Validators.required),
    VilleF   : new FormControl('',Validators.required),
    AddrF   : new FormControl(''),
    TeleFixF  : new FormControl('',Validators.required),
    TeleMF  : new FormControl(''),
    FaxF   : new FormControl(''),
    EmailF :  new FormControl('')
  

  });

 
private url = "http://localhost:3000/fournisseurs";

findAll(){
  return this.clientHTTP.get<fournisseur[]>(this.url);
}

ajouter(fournisseur){
  
  return this.clientHTTP.post<fournisseur>(this.url,fournisseur);
}
update(fournisseur)
{
  return this.clientHTTP.put(`${this.url}/${fournisseur.id}`,fournisseur);
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
    nomF : '',
    nomCF : '',
    VilleF : '',
    AddrF : '',
    TeleFixF : '',
    TeleMF  : '',
    FaxF  :'',
    EmailF : ''
    
  
  });
}
}
