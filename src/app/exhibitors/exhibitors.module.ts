import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitorsComponent } from './exhibitors.component';
import { ExhibitorsRoutingModule } from './exhibitors-routing.module';



@NgModule({
  declarations: [
    ExhibitorsComponent
  ],
  imports: [
    CommonModule,
    ExhibitorsRoutingModule,
  ]
})
export class ExhibitorsModule { }
