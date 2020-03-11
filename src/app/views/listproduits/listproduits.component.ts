import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {ProduitService} from "../../shared/produit.service";
import {produit} from "../../model/produit"
import {Router} from "@angular/router"


@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.component.html',
  styleUrls: ['./listproduits.component.css']
})
export class ListproduitsComponent implements OnInit {
  displayedColumns: string[] = [ 'imageP','nomP', 'nomCP', 'prixBase','prixVente','seuilMax','unite','qteInitial','qteActual','action'];
  dataSource = new MatTableDataSource<produit>();

  constructor(public service : ProduitService,private rout:Router) {
    this.fetchElements();

   }

  ngOnInit() {
    this.fetchElements();
  }
  fetchElements()
  {
    this.service.findAll().subscribe(data=>{if(!data) return; this.dataSource= new MatTableDataSource(data as any);});
  }
  onEdit(row){
    this.service.populateForm(row);
    this.rout.navigateByUrl("/produit");
  }
  onDelete(rowid){
    if(confirm("Sure ? ")){
      this.service.delete(rowid).subscribe(()=>{
       
        this.fetchElements();
       });
    }
  
  }
}
