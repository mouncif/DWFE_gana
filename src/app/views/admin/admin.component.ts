import { Component, OnInit } from '@angular/core';
import {ServicesService} from './../../shared/services.service';
import {Router} from "@angular/router" ;
import {client} from ".././../model/client";
import {FormGroup , FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public router :  Router, public service :ServicesService ) { }
  private client : client ={
    id : null,
    nomClient :'',
    prenomClient: '',
    statuClient : '',
    photoClient : '',
    tele : '',
    email :'',
    addressClient : '',
    villclient : '',

    access :false
    
    }
  

   
    clients : client[]= []
    
    ajouter(){
      this.service.ajouter(this.client).subscribe((client)=>this.clients=[client,...this.clients]);
    }
    add(){
     
  
       
         this.client = this.service.form.value;
         
           this.ajouter();
         
       
       
       
    
    }
    
    misajour(client){
    this.service.update(client).subscribe(() => console.log("seccesee updated"));
    this.router.navigateByUrl('/clients');
    }
    
    
    
      ngOnInit() {
      }

 

}
