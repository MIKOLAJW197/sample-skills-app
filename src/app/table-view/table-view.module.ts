import { TableViewRoutingModule } from './table-view-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TableViewComponent, UsersTableComponent],
  imports: [CommonModule, TableViewRoutingModule, SharedModule],
})
export class TableViewModule {}
