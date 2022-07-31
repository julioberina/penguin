import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer') drawer: any;

  public navItems = [
    { item: 'schedule', name: 'Schedule', klass: '' },
  ];

  constructor(private router: Router) {}

  goTo(page: string) {
    this.drawer.toggle();
    this.selectPage(page);
    this.router.navigate(['/', `${page}`]);
  }

  private selectPage(page: string) {
    this.navItems.map(navItem => navItem.klass = (navItem.item === page ? 'selected' : ''));
  }
}
