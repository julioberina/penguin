import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExhibitorsComponent } from './exhibitors.component';

const routes: Routes = [
  { path: '', component: ExhibitorsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ExhibitorsRoutingModule { }
