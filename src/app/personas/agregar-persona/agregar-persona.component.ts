import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector:    'app-agregar-persona',
    templateUrl: './agregar-persona.component.html',
    styleUrls:   ['./agregar-persona.component.css']
})
export class AgregarPersonaComponent {

    public addressForm = this.fb.group({
        nombre:    [null, Validators.required],
        apellido:  [null, Validators.required],
        domicilio: [null, Validators.required],        
        telefono:  [null, Validators.required],        
        nit:       [null, Validators.required],
        email:     [null, Validators.required],        
    });

    public hasUnitNumber = false;

    public states = [  ];

    public constructor(private fb: FormBuilder) {}

    public onSubmit() {
        console.log('onSubmit form', this.addressForm);
        alert('Thanks!');
    }
}
