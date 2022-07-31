import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyScheduleComponent } from './my-schedule.component';

const routes: Routes = [
  { path: '', component: MyScheduleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MyScheduleRoutingModule { }
