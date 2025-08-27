import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import * as XLSX from 'xlsx';
import { Config } from 'datatables.net';


@Component({
  selector: 'app-table-list',
  imports: [DataTablesModule],
  templateUrl: './table-list.html',
  styleUrl: './table-list.scss'
})
export class TableList implements OnInit {

  tableData: any[] = [];
   dtoptions: Config = {};

  

  ngOnInit(): void {
   
    // Beispiel-Daten
    this.tableData = [
      { id: 1, name: 'Produkt A', preis: 10 },
      { id: 2, name: 'Produkt B', preis: 20 },
      { id: 3, name: 'Produkt C', preis: 30 }
    ];
  }
  export() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
      this.tableData
    );
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

    XLSX.writeFile(workbook, 'Data.xlsx');
    return console.log('Data exported');
  }
}
