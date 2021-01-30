import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-edit-infl',
  templateUrl: './edit-infl.component.html',
  styleUrls: ['./edit-infl.component.css']
})
export class EditInflComponent implements OnInit {
  id: number;
  dataInsert: any;
  form: FormGroup;
  public nombre: string;
  public apellidos: string;
  public email: string;
  public telefono: string;

  constructor(
    private fb: FormBuilder,private client: ClientService,
    private dialogRef: MatDialogRef<EditInflComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.nombre = data.nombre;
    this.apellidos = data.apellidos;
    this.email = data.email;
    this.telefono = data.telefono;
   }

  ngOnInit(): void {
    this.id = this.data.data;
    this.edit('influencer/',this.id);
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
    let a = this.id;
    this.client.update(`influencer/${a}`, this.form.value).subscribe((data)=> {
      console.log(data);
        },
        error => {
          console.log(error);
        }
   );

    this.dialogRef.close(this.form.value);
}

edit(url,id) {
  this.client.getId(url,id)
  .subscribe( data => {
    console.log(data);
    this.form.setValue({
      nombre: data.nombre,
      apellidos: data.apellidos,
      email: data.email,
      telefono: data.telefono,
    });
   
  }
  );
}

}
