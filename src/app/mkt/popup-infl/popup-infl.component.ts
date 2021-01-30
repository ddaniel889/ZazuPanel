import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-popup-infl',
  templateUrl: './popup-infl.component.html',
  styleUrls: ['./popup-infl.component.css']
})
export class PopupInflComponent implements OnInit {
  dataInsert: any;
  form: FormGroup;
  public nombre: string;
  public apellidos: string;
  public email: string;
  public telefono: string;

  constructor(
    private fb: FormBuilder,private client: ClientService,
    private dialogRef: MatDialogRef<PopupInflComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.nombre = data.nombre;
    this.apellidos = data.apellidos;
    this.email = data.email;
    this.telefono = data.telefono;
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: [''],
      apellidos: [''],
      email: [''],
      telefono: [''],
  });
  }

  closeWithoutSave() {
    this.dialogRef.close();
  }
  save() {
    this.client.post('influencer', this.form.value).subscribe((data)=> {
      console.log(data);
      this.ngOnInit();
        },
        error => {
          console.log(error);
        }
   );

    this.dialogRef.close(this.form.value);
}

}
