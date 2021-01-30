import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-edit-bont',
  templateUrl: './edit-bont.component.html',
  styleUrls: ['./edit-bont.component.css']
})
export class EditBontComponent implements OnInit {
  form: FormGroup;
  dataInsert: any;
  public nombre: string;
  public descripcion: string;
  public descuento: number;
  public valor: number;
  public inicio: any;
  public fin: any;
  public ffin: any;
  public finicio: any;
  public plan: string;
  public fone : string;
  public fdos : string;
  id:number;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditBontComponent>,private client: ClientService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  
   }

  ngOnInit(): void {
    this.id = this.data.data;
    this.edit('bonificacion/',this.id);

    this.form = this.fb.group({
      nombre: [''],
      //descripcion: [''],
      descuento: [''],
      valor: [''],
      inicio: [''],
      fin: [''],
      ffin: [''],
      finicio: ['']
  });
  }

  closeWithoutSave() {
    this.dialogRef.close();
  }

  edit(url,id) {
    this.client.getId(url,id)
    .subscribe( data => {
      console.log(data);
      this.form.setValue({
        nombre: data.nombre,
        descuento: data.tipo_descuento,
        valor: data.valor,
        inicio: '00:00',
        fin: '00:00',
        finicio: '00-00-0000',
        ffin:'00-00-0000'
      });
     
    }
    );
  }

  save() {
    let a = this.id;
    const object: any = {
      nombre : this.form.value.nombre,
      fecha_desde : this.form.value.finicio+' '+this.form.value.inicio,
      fecha_hasta:  this.form.value.ffin+' '+this.form.value.fin,
      tipo_descuento : this.form.value.descuento,
      valor : this.form.value.valor,
    }
    this.client.update(`bonificacion/${a}`, object).subscribe((data)=> {
      console.log(data);
     
        },
        error => {
          console.log(error);
        }
   );
    this.dialogRef.close(object);
    console.log(object);
}

}
