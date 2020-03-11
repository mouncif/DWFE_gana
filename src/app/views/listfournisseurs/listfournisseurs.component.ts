import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {FournisseurService} from "../../shared/fournisseur.service";
import {fournisseur} from "../../model/fournisseur"
import {Router} from "@angular/router"
@Component({
  selector: 'app-listfournisseurs',
  templateUrl: './listfournisseurs.component.html',
  styleUrls: ['./listfournisseurs.component.css']
})
export class ListfournisseursComponent implements OnInit {

  displayedColumns: string[] = [ 'nomF','nomCF', 'VilleF', 'AddrF','TeleFixF','TeleMF','FaxF','EmailF','action'];
  dataSource = new MatTableDataSource<fournisseur>();

  constructor(public service : FournisseurService,private rout:Router) {
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
    this.rout.navigateByUrl("/fournisseur");
  }
  onDelete(rowid){
    if(confirm("Sure ? ")){
      this.service.delete(rowid).subscribe(()=>{
       
        this.fetchElements();
       });
    }
  
  }

}
