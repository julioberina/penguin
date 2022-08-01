import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'schedule', loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule) },
  { path: 'my-schedule', loadChildren: () => import('./my-schedule/my-schedule.module').then(m => m.MyScheduleModule) },
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'exhibitors', loadChildren: () => import('./exhibitors/exhibitors.module').then(m => m.ExhibitorsModule) },
  { path: 'speakers', loadChildren: () => import('./speakers/speakers.module').then(m => m.SpeakersModule) },
  { path: 'special-events', loadChildren: () => import('./special-events/special-events.module').then(m => m.SpecialEventsModule) },
  { path: 'qr-code', loadChildren: () => import('./qr-code/qr-code.module').then(m => m.QrCodeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
