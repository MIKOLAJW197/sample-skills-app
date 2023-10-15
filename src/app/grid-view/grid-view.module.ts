import { GridViewRoutingModule } from './grid-view-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridViewComponent } from './grid-view.component';

@NgModule({
  declarations: [GridViewComponent],
  imports: [CommonModule, GridViewRoutingModule],
})
export class GridViewModule {}
