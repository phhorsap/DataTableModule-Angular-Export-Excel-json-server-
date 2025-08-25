import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net';


@Component({
  selector: 'app-table-list',
  imports: [DataTablesModule],
  templateUrl: './table-list.html',
  styleUrl: './table-list.scss'
})
export class TableList implements OnInit {

  tableData: any[] = [];
  

  ngOnInit(): void {
   
    // Beispiel-Daten
    this.tableData = [
      { id: 1, name: 'Produkt A', preis: 10 },
      { id: 2, name: 'Produkt B', preis: 20 },
      { id: 3, name: 'Produkt C', preis: 30 }
    ];
  }
}
