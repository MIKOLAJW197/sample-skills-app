import { TableViewRoutingModule } from './table-view-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view.component';

@NgModule({
  declarations: [TableViewComponent],
  imports: [CommonModule, TableViewRoutingModule],
})
export class TableViewModule {}
