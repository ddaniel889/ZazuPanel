import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-veh',
  templateUrl: './edit-veh.component.html',
  styleUrls: ['./edit-veh.component.css']
})
export class EditVehComponent implements OnInit {
  dataInsert: any;
  public nombre: string;
  public icono: any;
  form: FormGroup;
  id: number;

  constructor(
    private fb: FormBuilder,private client: ClientService, public router: Router,
    private dialogRef: MatDialogRef<EditVehComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.nombre = data.nombre;
   }

   public onFileChoosen(file: any) {
    this.icono = file;
}

  ngOnInit(): void {
    this.id = this.data.data;
    console.log(this.id);
    this.edit('tipo-transporte-imagen/',this.id);
    this.form = this.fb.group({
      nombre: ['']
  });
  }

  closeWithoutSave() {
    this.dialogRef.close();
  }

  save() {
    let a = this.id;
    this.client.update(`tipo-transporte/${a}`, this.form.value,[
      { name:'icono', file: this.icono },
  ]).subscribe((data)=> {
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
      nombre: data.icono
    });
   
  }
  );
}

}
