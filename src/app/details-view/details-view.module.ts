import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsViewComponent } from './details-view.component';
import { DetailsViewRoutingModule } from './details-view-routing.module';

@NgModule({
  declarations: [DetailsViewComponent],
  imports: [DetailsViewRoutingModule, CommonModule],
})
export class DetailsViewModule {}
