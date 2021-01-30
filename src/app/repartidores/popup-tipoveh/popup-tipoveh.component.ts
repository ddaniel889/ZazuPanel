import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-tipoveh',
  templateUrl: './popup-tipoveh.component.html',
  styleUrls: ['./popup-tipoveh.component.css']
})
export class PopupTipovehComponent implements OnInit {
  dataInsert: any;
  public nombre: string;
  public icono: any;
  form: FormGroup;

  
   constructor(
    private fb: FormBuilder,private client: ClientService, public router: Router,
    private dialogRef: MatDialogRef<PopupTipovehComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    
  ) { 

    this.nombre = data.nombre;
  }

  public onFileChoosen(file: any) {
    this.icono = file;
}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['']
  });
  }

  closeWithoutSave() {
    this.dialogRef.close();
  }

  save() {

    this.client.post('tipo-transporte', this.form.value,[
      { name:'icono', file: this.icono },
  ]).subscribe((data)=> {
      console.log(data);
      this.router.navigateByUrl('/repartidores/vehiculos');
        },
        error => {
          console.log(error);
        }
   );
    this.dialogRef.close(this.form.value);
}

}
