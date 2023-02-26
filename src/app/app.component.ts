import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;

  public currentPath = window.location.pathname;
  public links = [
    { name: 'Schedule', path: '/schedule' },
    { name: 'My Schedule', path: '/my-schedule' },
    { name: 'Scan Badge QR Code', path: '/qr-code' },
    { name: 'Contacts', path: '/contacts' },
  ];

  constructor(private router: Router) {
    fromEvent(window, 'popstate')
    .subscribe((e) => {
      this.currentPath = window.location.pathname;
    });
  }

  public setPath(path: string) {
    this.currentPath = path;
    this.router.navigate([path]);
    this.drawer.toggle();
  }

  public goHome() {
    this.currentPath = ''
    this.router.navigate(['/']);
    this.drawer.toggle();
  }
}
