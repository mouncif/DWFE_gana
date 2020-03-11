import { Component, OnInit } from '@angular/core';
import {FournisseurService} from './../../shared/fournisseur.service';
import {Router} from "@angular/router" ;
import {fournisseur} from ".././../model/fournisseur";
import {FormGroup , FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  constructor(public router :  Router, public service :FournisseurService ) { }
  private fournisseur : fournisseur ={
    id : null,
    nomF :'',
    nomCF : '',
    VilleF : '',
    AddrF   : '',
    TeleFixF   : '',
    TeleMF   :'',
    FaxF   : '',
    EmailF  : ''
    
    }
  

   
    fournisseurs : fournisseur[]= []
    
    ajouter(){
      this.service.ajouter(this.fournisseur).subscribe((fournisseur)=>this.fournisseurs=[fournisseur,...this.fournisseurs]);
    }
    add(){
     
  
     

         this.fournisseur = this.service.form.value;

         if(this.fournisseur.id==null){
          
         this.ajouter();
         this.router.navigateByUrl("/listfournisseur");
        }else{
        console.log("I m here");
          this.misajour(this.fournisseur);
          this.router.navigateByUrl("/listfournisseur");
        }
    
         
       
       
       
    
    }
  
    
    misajour(fournisseur){
    this.service.update(fournisseur).subscribe(() => console.log("seccesee updated"));
  
    }
    
    onClear(){
      this.service.initializeFormGroup();
      this.service.form.reset();
      }
    
      ngOnInit() {
      
      }

}
