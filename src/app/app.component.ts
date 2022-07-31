import { Component, HostListener, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer') drawer: any;

  public navItems = [
    { item: '/schedule', name: 'Schedule', klass: '' },
    { item: '/my-schedule', name: 'My Schedule', klass: '' },
  ];

  constructor(private router: Router,
              private location: Location,) {}

  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    this.selectPage(this.location.path());
  }

  goTo(page: string) {
    this.drawer.toggle();
    this.selectPage(page);
    this.router.navigate([`${page}`]);
  }

  private selectPage(page: string) {
    this.navItems.map(nav => nav.klass = (nav.item === page ? 'selected' : ''));
  }
}
