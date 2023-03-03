import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToMyScheduleDialogComponent } from './add-to-my-schedule-dialog.component';

describe('AddToMyScheduleDialogComponent', () => {
  let component: AddToMyScheduleDialogComponent;
  let fixture: ComponentFixture<AddToMyScheduleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToMyScheduleDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToMyScheduleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
