import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-to-my-schedule-dialog',
  templateUrl: './add-to-my-schedule-dialog.component.html',
  styleUrls: ['./add-to-my-schedule-dialog.component.scss']
})
export class AddToMyScheduleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddToMyScheduleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }

  onYesClick() {
    this.dialogRef.close(true);
  }
}
