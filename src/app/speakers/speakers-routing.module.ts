import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SpeakersComponent } from './speakers.component';

const routes: Routes = [
  { path: '', component: SpeakersComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class SpeakersRoutingModule { }
