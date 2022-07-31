import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyScheduleComponent } from './my-schedule.component';
import { MyScheduleRoutingModule } from './my-schedule-routing.module';



@NgModule({
  declarations: [
    MyScheduleComponent
  ],
  imports: [
    CommonModule,
    MyScheduleRoutingModule,
  ]
})
export class MyScheduleModule { }
