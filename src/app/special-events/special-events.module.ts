import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialEventsComponent } from './special-events.component';
import { SpecialEventsRoutingModule } from './special-events-routing.module';



@NgModule({
  declarations: [
    SpecialEventsComponent
  ],
  imports: [
    CommonModule,
    SpecialEventsRoutingModule,
  ]
})
export class SpecialEventsModule { }
