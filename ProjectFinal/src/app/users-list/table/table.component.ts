import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  columns: string[];

  constructor() { }

  ngOnInit() {
    this.columns = ['First Name', 'Last Name', 'E-mail', 'Country']
  }

}
