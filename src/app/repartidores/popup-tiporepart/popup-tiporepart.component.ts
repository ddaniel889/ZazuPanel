import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-popup-tiporepart',
  templateUrl: './popup-tiporepart.component.html',
  styleUrls: ['./popup-tiporepart.component.css']
})
export class PopupTiporepartComponent implements OnInit {
  Insert: any;
  public tipo_repartidor: string;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PopupTiporepartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.tipo_repartidor = data.tipo_repartidor;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      tipo_repartidor: [''],
  });

  }
  close() {
    this.dialogRef.close();
  }
  save() {
    this.dialogRef.close(this.form.value);
}

}
