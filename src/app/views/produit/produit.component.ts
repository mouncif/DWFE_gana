import { Component, OnInit } from '@angular/core';
import {ProduitService} from './../../shared/produit.service';
import {Router} from "@angular/router" ;
import {produit} from ".././../model/produit";
import {FormGroup , FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  constructor(public router :  Router, public service :ProduitService ) { }
  private produit : produit ={
    id : null,
    nomP :'',
    nomCP : '',
    prixBase  : '',
    prixVente  : '',
    seuilMax  : '',
    unite  :null,
    imageP  : '',
    qteInitial  : null,
    qteActual : null
    
    }
  

   
    produits : produit[]= []
    
    ajouter(){
      this.service.ajouter(this.produit).subscribe((produit)=>this.produits=[produit,...this.produits]);
    }
    add(){
     
  
     

         this.produit = this.service.form.value;

         if(this.produit.id==null){
          
         this.ajouter();
         this.router.navigateByUrl("/listproduit");
        }else{
        
          this.misajour(this.produit);
          this.router.navigateByUrl("/listproduit");
        }
    
         
       
       
       
    
    }
  
    
    misajour(produit){
    this.service.update(produit).subscribe(() => console.log("seccesee updated"));
  
    }
    
    onClear(){
      this.service.initializeFormGroup();
      this.service.form.reset();
      }
    
      ngOnInit() {
      }


}
