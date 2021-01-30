import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent implements OnInit {
  id: any;
  Insert: any;
  public nombre: string;
  public descripcion: string;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,public router: Router,
    private dialogRef: MatDialogRef<EditCatComponent>,private client: ClientService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.nombre = data.nombre;
    this.descripcion = data.descripcion;
   }

  ngOnInit(): void {
    
    this.id = this.data.data;
    console.log('ID DE TIENDA'+this.id);
    this.edit('categoria-comercio/',this.id);
    this.form = this.fb.group({
      nombre: [''],
      descripcion: ['']
  });
  }

  close() {
    this.dialogRef.close();
  }
  save() {
    let a = this.id;
    this.client.update(`categoria-comercio/${a}`, this.form.value).subscribe((data)=> {
      console.log(data);
        },
        error => {
          console.log(error);
        }
   );
    this.dialogRef.close(this.form.value);
    console.log(this.form.value);
}

edit(url,id) {
  this.client.getId(url,id)
  .subscribe( data => {
    console.log(data);
    this.form.setValue({
      nombre: data.nombre,
      descripcion: data.descripcion
    });
   
  }
  );
}




}
