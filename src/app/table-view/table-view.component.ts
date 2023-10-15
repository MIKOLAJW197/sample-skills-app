import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.users$ = this.apiService.getUsers();
  }
}
