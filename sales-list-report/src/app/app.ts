import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableList } from './table-list/table-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TableList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sales-list-report');
}
