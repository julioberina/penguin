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

@Component({
  selector: 'app-my-schedule',
  templateUrl: './my-schedule.component.html',
  styleUrls: ['./my-schedule.component.scss']
})
export class MyScheduleComponent {
  public eventsData: any;
  public eventDay = '';
  public eventsMap: Record<string, any> = {};

  public myScheduleItems: any;

  constructor(private dialog: MatDialog,
              private snackBar: MatSnackBar) {
    this.loadMyScheduleData();
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

  public removeFromMySchedule(path: string, title: string) {
    const dialogRef = this.dialog.open(ScheduleDialogComponent, {
      data: { action: 'remove', title },
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.myScheduleItems.delete(path);
        this.saveMyScheduleItems();
        this.loadMyScheduleData(this.eventDay);
        this.snackBar.open('Event removed successfully!', 'OK', {
          duration: 3000
        });
      }
    });
  }

  private loadMyScheduleData(day?: string) {
    this.getMyScheduleItems();

    this.eventDay = day || '';
    this.eventsMap = {
      'Thursday': of(this.filterMyScheduleItems(eventsThursday.events)),
      'Friday': of(this.filterMyScheduleItems(eventsFriday.events)),
      'Saturday': of(this.filterMyScheduleItems(eventsSaturday.events)),
      'Sunday': of(this.filterMyScheduleItems(eventsSunday.events))
    };
    this.eventsData = day ? this.eventsMap[day] : of(this.filterMyScheduleItems(events.events));
  }

  private getMyScheduleItems() {
    this.myScheduleItems = new Set(JSON.parse(localStorage.getItem('myScheduleItems') || '[]'));
  }

  private filterMyScheduleItems(events: any) {
    return events.filter((event: any) => this.myScheduleItems.has(event.url));
  }

  private saveMyScheduleItems() {
    localStorage.setItem('myScheduleItems', JSON.stringify([...this.myScheduleItems]));
  }
}
