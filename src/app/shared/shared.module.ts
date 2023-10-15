import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material/material.module';

const COMPONENTS = [NavbarComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [...COMPONENTS, MaterialModule],
})
export class SharedModule {}
