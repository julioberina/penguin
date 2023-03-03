import { Component } from '@angular/core';
import { default as events } from '../../assets/data/scale-20x-events.json';
import { default as eventsThursday } from '../../assets/data/scale-20x-events-thursday.json';
import { default as eventsFriday } from '../../assets/data/scale-20x-events-friday.json';
import { default as eventsSaturday } from '../../assets/data/scale-20x-events-saturday.json';
import { default as eventsSunday } from '../../assets/data/scale-20x-events-sunday.json';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ScheduleDialogComponent } from '../schedule-dialog/schedule-dialog.component';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  public eventsData = of(events.events);
  public eventDay = '';
  public eventsMap: Record<string, any> = {
    'Thursday': of(eventsThursday.events),
    'Friday': of(eventsFriday.events),
    'Saturday': of(eventsSaturday.events),
    'Sunday': of(eventsSunday.events)
  };

  public myScheduleItems: any;

  constructor(private dialog: MatDialog,
              private snackBar: MatSnackBar) {
    this.getMyScheduleItems();
  }

  public setDay(day: string) {
    this.eventsData = this.eventsMap[day];
    this.eventDay = day;
  }

  public getEventDays() {
    return Object.keys(this.eventsMap);
  }

  public getNgClass(day: string) {
    return this.eventDay === day ? 'button-day active' : 'button-day';
  }

  public isInMySchedule(path: string) {
    return this.myScheduleItems.has(path);
  }

  public addToMySchedule(path: string, title: string) {
    const dialogRef = this.dialog.open(ScheduleDialogComponent, {
      data: { action: 'add', title },
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.myScheduleItems.add(path);
        this.saveMyScheduleItems();
        this.snackBar.open('Event added successfully!', 'OK', {
          duration: 3000
        });
      }
    });
  }

  public viewEventInfo(event: any) {
    this.dialog.open(InfoDialogComponent, {
      data: { ...event },
    });
  }

  private getMyScheduleItems() {
    this.myScheduleItems = new Set(JSON.parse(localStorage.getItem('myScheduleItems') || '[]'));
  }

  private saveMyScheduleItems() {
    localStorage.setItem('myScheduleItems', JSON.stringify([...this.myScheduleItems]));
  }
}
