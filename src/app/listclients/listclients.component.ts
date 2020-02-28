import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {ServicesService} from "./../shared/services.service";
import {client} from "./../model/client"
import {Router} from "@angular/router"



@Component({
  selector: 'app-listclients',
  templateUrl: './listclients.component.html',
  styleUrls: ['./listclients.component.css']
})
export class ListclientsComponent implements OnInit {

  displayedColumns: string[] = [ 'photoClient','nom', 'prenom', 'statuClient','tele','email','addressClient','villclient','access','action'];
  dataSource = new MatTableDataSource<client>();

  constructor(public service : ServicesService,private rout:Router) {
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
    this.rout.navigateByUrl("/clients");
  }
  onDelete(rowid){
    if(confirm("Sure ? ")){
      this.service.delete(rowid).subscribe(()=>{
       
        this.fetchElements();
       });
    }
  
  }

}
