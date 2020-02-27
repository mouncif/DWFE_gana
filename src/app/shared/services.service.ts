import { Injectable } from '@angular/core';
import {FormGroup , FormControl,Validators} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import {client} from "./../model/client";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public clientHTTP:HttpClient) { }
  form : FormGroup = new FormGroup({
    id : new FormControl('null'),
    nomClient : new FormControl('',Validators.minLength(8)),
    prenomClient : new FormControl('',Validators.required),
    statuClient : new FormControl('',Validators.required),
    photoClient : new FormControl(''),
    tele : new FormControl('',Validators.required),
    addressClient : new FormControl(''),
    villclient :  new FormControl(''),
    access : new FormControl(false)

  });

 
private url = "http://localhost:3000/clients";

findAll(){
  return this.clientHTTP.get<client[]>(this.url);
}

ajouter(client){
  
  return this.clientHTTP.post<client>(this.url,client);
}
update(client)
{
  return this.clientHTTP.put(`${this.url}/${client.id}`,client);
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
    nomClient: '',
    prenomClient: '',
    statuClient: '',
    photoClient: '',
    tele: '',
    addressClient : '',
    villclient :'',
    access: false,
  
  });
}

}
