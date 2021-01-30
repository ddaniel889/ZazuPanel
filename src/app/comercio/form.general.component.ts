import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin      } from 'rxjs';
import { Comercio      } from './Comercio';
import { Persona       } from '../personas/Persona';
import { ClientService } from '../client.service';

@Component({
    selector: 'app-comercio-form-general',
    template: `
        <form (ngSubmit)="onSubmit()">
            <mat-card>
                <mat-card-title *ngIf="accion==='agregar'">Crear un comercio</mat-card-title>
                <mat-card-title *ngIf="accion==='actualizar'">Actualizar comercio</mat-card-title>
                <mat-card-content>
                    <br />
                    <mat-divider></mat-divider>
                    <br />
                    
                    <h2>Datos generales</h2>
                    <mat-form-field full-width appearance="fill">
                        <mat-label>Nombre</mat-label>
                        <input matInput [(ngModel)]="comercio.nombre" [ngModelOptions]="{standalone: true}">
                    </mat-form-field>
                    

                    <mat-form-field full-width appearance="fill">
                        <mat-label>Telefono</mat-label>
                        <input matInput [(ngModel)]="comercio.telefono" [ngModelOptions]="{standalone: true}">
                    </mat-form-field>


                    <mat-form-field full-width appearance="fill">
                        <mat-label>Nit</mat-label>
                        <input matInput [(ngModel)]="comercio.nit" [ngModelOptions]="{standalone: true}">
                    </mat-form-field>

                    <mat-form-field full-width appearance="fill">
                        <mat-label>Domicilio</mat-label>
                        <input matInput [(ngModel)]="comercio.domicilio" [ngModelOptions]="{standalone: true}">
                    </mat-form-field>

                    <img [src]="client.getApiUrl() + comercio.url" />

                    
                        <input #inputFoto hidden="true" type="file" onclick="this.value=null" (change)="onFileChoosen($event.target.files[0])"/>
                        <button mat-flat-button color="primary" type="button" (click)="inputFoto.click()">Imagen de logo</button>

                    <br />
                    <mat-divider></mat-divider>
                    <br />
                    <h2>Configuración</h2>

                    <mat-form-field full-width appearance="fill">
                        <mat-label>Categoría de comercio</mat-label>
                        <mat-select [(ngModel)]="comercio.categoria_comercio_id" [ngModelOptions]="{standalone: true}">
                            <mat-option *ngFor="let row of categoriasComercio" [value]="row.id">{{row.nombre}}</mat-option>
                        </mat-select>
                    </mat-form-field>

                    <mat-form-field full-width appearance="fill">
                        <mat-label>Tipo de Tarifa</mat-label>
                        <mat-select [(ngModel)]="comercio.tarifa_id" [ngModelOptions]="{standalone: true}">
                            <mat-option *ngFor="let row of tarifas" [value]="row.id">{{row.nombre}}</mat-option>
                        </mat-select>
                    </mat-form-field>

                    <mat-form-field full-width appearance="fill">
                        <mat-label>Método de logística</mat-label>
                        <mat-select [(ngModel)]="comercio.tipo_repartidor" [ngModelOptions]="{standalone: true}">
                            <mat-option value="EXTERNO">EXTERNO</mat-option>
                            <mat-option value="COMERCIO">COMERCIO</mat-option>
                            <mat-option value="MIXTA">MIXTA</mat-option>
                        </mat-select>
                    </mat-form-field>

                    <mat-form-field full-width appearance="fill">
                        <mat-label>Tipo de liquidación de Repartidores</mat-label>
                        <mat-select [(ngModel)]="comercio.tipo_liquidacion" [ngModelOptions]="{standalone: true}">
                            <mat-option value="ANTICIPADA">ANTICIPADA</mat-option>
                            <mat-option value="DIFERIDA">DIFERIDA</mat-option>
                        </mat-select>
                    </mat-form-field>                 


                    <mat-divider></mat-divider>
                    <br />
                    <!--h2>Datos del Titular</h2>
                    <mat-form-field full-width appearance="fill">
                        <mat-label>Nombre</mat-label>
                        <input matInput [(ngModel)]="persona.nombre" [ngModelOptions]="{standalone: true}">
                    </mat-form-field>

                    <mat-form-field full-width appearance="fill">
                        <mat-label>Apellidos</mat-label>
                        <input matInput [(ngModel)]="persona.apellidos" [ngModelOptions]="{standalone: true}">
                    </mat-form-field>

                    <mat-form-field full-width appearance="fill">
                        <mat-label>NIT</mat-label>
                        <input matInput [(ngModel)]="persona.cuit" [ngModelOptions]="{standalone: true}">
                    </mat-form-field>

                    <mat-form-field full-width appearance="fill">
                        <mat-label>Telefono</mat-label>
                        <input matInput [(ngModel)]="persona.telefono" [ngModelOptions]="{standalone: true}">
                    </mat-form-field>

                    <mat-form-field full-width appearance="fill">
                        <mat-label>e-Mail</mat-label>
                        <input matInput [(ngModel)]="persona.correo" [ngModelOptions]="{standalone: true}">
                    </mat-form-field>

                    <mat-form-field full-width appearance="fill">
                        <mat-label>Fecha de nacimiento</mat-label>
                        <input matInput [(ngModel)]="persona.fecha_nacimiento" [ngModelOptions]="{standalone: true}">
                    </mat-form-field>

                    <mat-form-field full-width appearance="fill">
                        <mat-label>Género</mat-label>
                        <mat-select [(ngModel)]="persona.genero" [ngModelOptions]="{standalone: true}">
                            <mat-option value="MASCULINO">MASCULINO</mat-option>
                            <mat-option value="FEMENINO">FEMENINO</mat-option>
                        </mat-select>
                    </mat-form-field-->
                </mat-card-content>
                <mat-card-actions>
                    <button *ngIf="accion=='agregar'" mat-flat-button color="primary" type="submit">CREAR</button>
                    <button *ngIf="accion=='actualizar'" mat-flat-button color="primary" type="submit">ACTAULIZAR</button>
                </mat-card-actions>
            </mat-card>
        </form>
    `,
    styles: [
    ]
})
export class ComercioFormGeneralComponent implements OnInit {
    
    @Input() public id: number;
    @Output() public onCreated: EventEmitter<any> = new EventEmitter<any>();
    public accion: string = 'agregar';

    public categoriasComercio      : any[];
    public tarifas                 : any[];

    public comercio: Comercio = new Comercio();
    public persona: Persona;
    constructor(
        public client: ClientService,
    ) { }

    ngOnInit(): void {
        this.persona = new Persona;
        forkJoin<any, any>({
            categoriaComercio: this.client.get('/categoria-comercio'),
            tarifa: this.client.get('/tarifa'),
        }).subscribe((data: any) => {
            this.categoriasComercio = data.categoriaComercio.data;
            this.tarifas = data.tarifa.data;

            if (this.id) {
                this.accion = 'actualizar';
                this.client.get('/comercio/' + this.id).subscribe((data: any) => {
                    this.comercio = data;
                    for(let persona of data.personas) {
                        this.persona = persona;
                        if (true) { break; }
                    }
                });
            }
        });
    }

    public onFileChoosen(file: any) {
        this.comercio.foto = file;
    }

    public onSubmit() {
        /**
         * Copio los datos de comercio a un nuevo objeto plano
         * Al que le agrego los datos que requiere el endpoint.
         */
        let data       = Object.assign<any, any>({}, this.comercio);
        data.latitud   = 10;
        data.longitud  = 10;
        data.persona_id  = 3;
        data.operar_en = 'WHATSAPP';
        data.persona   = this.persona;

        this.client.post('comercio', data, [
            { name:'imagen', file: this.comercio.foto },
        ]).subscribe((data)=> {
            console.log(data);
            this.onCreated.emit(data);
        });
    }

}
