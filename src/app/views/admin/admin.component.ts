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
    access :''
    
    }
  

   
    clients : client[]= []
    
    ajouter(){
      this.service.ajouter(this.client).subscribe((client)=>this.clients=[client,...this.clients]);
    }
    add(){
      console.log('Why I m here ? ');
      this.client = this.service.form.value;
         if(this.client.id==null){
          
         this.ajouter();
         this.router.navigateByUrl("/list");
        }else{
        
          this.misajour(this.client);
          this.router.navigateByUrl("/list");
        }
    
         
       
       
       
    
    }
    accesses = [
      { id: 3, value: 'User' },
      { id: 2, value: 'Editor' },
      { id: 3, value: 'Admin' }];
    
    misajour(client){
    this.service.update(client).subscribe(() => console.log("seccesee updated"));
  
    }
    
    onClear(){
      this.service.initializeFormGroup();
      console.log('Clicked');
      this.service.form.reset();
      }
    
      ngOnInit() {
      }

 

}
