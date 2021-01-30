import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-ad-productos',
  templateUrl: './ad-productos.component.html',
  styleUrls: ['./ad-productos.component.css']
})
export class AdProductosComponent implements OnInit {
  Insert: any;
  public nombre: string;
  form: FormGroup;
  icono:any;

  constructor(
    private fb: FormBuilder,public router: Router, private client: ClientService,
    private dialogRef: MatDialogRef<AdProductosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.nombre = data.nombre;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['']
  });
  }

  public onFileChoosen(file: any) {
    this.icono = file;
}
  close() {
    this.dialogRef.close();
  }
  save() {
    this.client.post('producto/categoria', this.form.value,[
      { name:'icono', file: this.icono },
  ]).subscribe((data)=> {
      console.log(data);
      this.router.navigateByUrl('/productos/categorias');
        },
        error => {
          console.log(error);
        }
   );

    this.dialogRef.close(this.form.value);
    console.log(this.form.value);
}

}
