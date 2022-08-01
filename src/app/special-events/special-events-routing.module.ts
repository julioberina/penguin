import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SpecialEventsComponent } from './special-events.component';

const routes: Routes = [
  { path: '', component: SpecialEventsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class SpecialEventsRoutingModule { }
