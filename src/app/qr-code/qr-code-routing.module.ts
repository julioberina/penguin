import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QrCodeComponent } from './qr-code.component';

const routes: Routes = [
  { path: '', component: QrCodeComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class QrCodeRoutingModule { }
