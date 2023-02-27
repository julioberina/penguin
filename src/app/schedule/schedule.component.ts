import { Component } from '@angular/core';
import { default as events } from '../../assets/data/scale-20x-events.json';
import { default as eventsThursday } from '../../assets/data/scale-20x-events-thursday.json';
import { default as eventsFriday } from '../../assets/data/scale-20x-events-friday.json';
import { default as eventsSaturday } from '../../assets/data/scale-20x-events-saturday.json';
import { default as eventsSunday } from '../../assets/data/scale-20x-events-sunday.json';
import { Observable, of } from 'rxjs';

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

  constructor() {}

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
}
