import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MyScheduleComponent } from './my-schedule/my-schedule.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: '', component: AnnouncementsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'my-schedule', component: MyScheduleComponent },
  { path: 'qr-code', component: QrCodeComponent },
  { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
