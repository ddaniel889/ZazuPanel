import { BrowserModule                    } from '@angular/platform-browser';
import { NgModule                         } from '@angular/core';
import { MatToolbarModule                 } from '@angular/material/toolbar';
import { AppRoutingModule                 } from './app-routing.module';
import { BrowserAnimationsModule          } from '@angular/platform-browser/animations';
import { LayoutModule                     } from '@angular/cdk/layout';
import { MatButtonModule                  } from '@angular/material/button';
import { MatSidenavModule                 } from '@angular/material/sidenav';
import { MatIconModule                    } from '@angular/material/icon';
import { MatListModule                    } from '@angular/material/list';
import { MatTableModule                   } from '@angular/material/table';
import { MatPaginatorModule               } from '@angular/material/paginator';
import { MatSortModule                    } from '@angular/material/sort';
import { MatCardModule                    } from '@angular/material/card';
import { MatInputModule                   } from '@angular/material/input';
import { MatSelectModule                  } from '@angular/material/select';
import { MatRadioModule                   } from '@angular/material/radio';
import {MatCheckboxModule                 } from '@angular/material/checkbox';
import { MatMenuModule                    } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule                } from '@angular/material/grid-list';
import {MatDialogModule}                    from '@angular/material/dialog';

import { AppComponent                     } from './app.component';
import { NavigationComponent              } from './navigation.component';
import { ListadoPersonasComponent         } from './personas/listado-personas/listado-personas.component';
import { AgregarPersonaComponent          } from './personas/agregar-persona/agregar-persona.component';
import { ComercioListadoComponent         } from './comercio/listado.component';
import { HttpClient, HttpClientModule     } from '@angular/common/http';
import { LoginComponent                   } from './login.component';
import { AuthService                      } from './auth.service';
import { ClientService                    } from './client.service';
import { ListadoComponent                 } from './listado.component';
import { RepartidorListadoComponent       } from './repartidor/listado.component';
import { RepartidorAgregarComponent       } from './repartidor/agregar.component';
import { ComercioAgregarComponent         } from './comercio/agregar.component';
import { ComercioDetalleComponent         } from './comercio/detalle.component';
import { ComercioFormGeneralComponent     } from './comercio/form.general.component';
import { FormTextComponent                } from './form/text.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TiendaComponent } from './tiendas/tienda/tienda.component';
import { CategoriasComponent } from './tiendas/categorias/categorias.component';
import { TarifasComponent } from './tiendas/tarifas/tarifas.component';
import { BonificacionesComponent } from './tiendas/bonificaciones/bonificaciones.component';
import { RepartidorComponent } from './repartidores/repartidor/repartidor.component';
import { TiposRepartidoresComponent } from './repartidores/tipos-repartidores/tipos-repartidores.component';
import { TiposVehiculosComponent } from './repartidores/tipos-vehiculos/tipos-vehiculos.component';
import { TiendasComponent } from './liquidaciones/tiendas/tiendas.component';
import { RepartidoresComponent } from './liquidaciones/repartidores/repartidores.component';
import { CampanasComponent } from './mkt/campanas/campanas.component';
import { InfluencersComponent } from './mkt/influencers/influencers.component';
import { PedidosComponent } from './reportes/pedidos/pedidos.component';
import { EnviosComponent } from './reportes/envios/envios.component';
import { TarifasrepComponent } from './repartidores/tarifasrep/tarifasrep.component';
import { BonificacionesrepComponent } from './repartidores/bonificacionesrep/bonificacionesrep.component';
import { CategoriasprodComponent } from './productos/categoriasprod/categoriasprod.component';
import { ReportescaComponent } from './reportes/reportesca/reportesca.component';
import { RrepartidoresComponent } from './repartidores/rrepartidores/rrepartidores.component';
import { TiendaDetailComponent } from './tiendas/tienda-detail/tienda-detail.component';
import { UserDetailComponent } from './tiendas/user-detail/user-detail.component';
import { PopupBonComponent } from './tiendas/popup-bon/popup-bon.component';
import { PopupRepartComponent } from './repartidores/popup-repart/popup-repart.component';
import { PopupTiporepartComponent } from './repartidores/popup-tiporepart/popup-tiporepart.component';
import { PopupTipovehComponent } from './repartidores/popup-tipoveh/popup-tipoveh.component';
import { PopupBonrepartComponent } from './repartidores/popup-bonrepart/popup-bonrepart.component';
import { PopupCampComponent } from './mkt/popup-camp/popup-camp.component';
import { PopupInflComponent } from './mkt/popup-infl/popup-infl.component';
import { DetailLTiendaComponent } from './liquidaciones/detail-ltienda/detail-ltienda.component';
import { DetailLRepartComponent } from './liquidaciones/detail-lrepart/detail-lrepart.component';
import { AddTiendasComponent } from './tiendas/add-tiendas/add-tiendas.component';
import { ToggleComponent } from './toggle/toggle.component';
import { AddcategoriasComponent } from './addcategorias/addcategorias.component';
import { AddTarifasComponent } from './tiendas/add-tarifas/add-tarifas.component';
import { AdTarifasRepartComponent } from './repartidores/ad-tarifas-repart/ad-tarifas-repart.component';
import { AdProductosComponent } from './productos/ad-productos/ad-productos.component';
import { EditGenComponent } from './tiendas/edit-gen/edit-gen.component';
import { EditConfigComponent } from './tiendas/edit-config/edit-config.component';
import { EditPlanComponent } from './tiendas/edit-plan/edit-plan.component';
import { EditDataComponent } from './repartidores/edit-data/edit-data.component';
import { EditPComponent } from './repartidores/edit-p/edit-p.component';
import { EditCatComponent } from './tiendas/edit-cat/edit-cat.component';
import { EditTarifasComponent } from './tiendas/edit-tarifas/edit-tarifas.component';
import { EditBontComponent } from './tiendas/edit-bont/edit-bont.component';
import { EditVehComponent } from './repartidores/edit-veh/edit-veh.component';
import { EditComisionComponent } from './repartidores/edit-comision/edit-comision.component';
import { EditCampComponent } from './mkt/edit-camp/edit-camp.component';
import { ECatComponent } from './productos/e-cat/e-cat.component';
import { EditInflComponent } from './mkt/edit-infl/edit-infl.component';
import { EditBonrComponent } from './repartidores/edit-bonr/edit-bonr.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        ListadoPersonasComponent,
        AgregarPersonaComponent,
        ComercioListadoComponent,
        LoginComponent,
        ListadoComponent,
        RepartidorListadoComponent,
        RepartidorAgregarComponent,
        ComercioAgregarComponent,
        ComercioDetalleComponent,
        FormTextComponent,
        ComercioFormGeneralComponent,
        DashboardComponent,
        TiendaComponent,
        CategoriasComponent,
        TarifasComponent,
        BonificacionesComponent,
        RepartidorComponent,
        TiposRepartidoresComponent,
        TiposVehiculosComponent,
        TiendasComponent,
        RepartidoresComponent,
        CampanasComponent,
        InfluencersComponent,
        PedidosComponent,
        EnviosComponent,
        TarifasrepComponent,
        BonificacionesrepComponent,
        CategoriasprodComponent,
        ReportescaComponent,
        RrepartidoresComponent,
        TiendaDetailComponent,
        UserDetailComponent,
        PopupBonComponent,
        PopupRepartComponent,
        PopupTiporepartComponent,
        PopupTipovehComponent,
        PopupBonrepartComponent,
        PopupCampComponent,
        PopupInflComponent,
        DetailLTiendaComponent,
        DetailLRepartComponent,
        AddTiendasComponent,
        ToggleComponent,
        AddcategoriasComponent,
        AddTarifasComponent,
        AdTarifasRepartComponent,
        AdProductosComponent,
        EditGenComponent,
        EditConfigComponent,
        EditPlanComponent,
        EditDataComponent,
        EditPComponent,
        EditCatComponent,
        EditTarifasComponent,
        EditBontComponent,
        EditVehComponent,
        EditComisionComponent,
        EditCampComponent,
        ECatComponent,
        EditInflComponent,
        EditBonrComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        LayoutModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatMenuModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatGridListModule
    ],
    providers: [
        HttpClient,
        AuthService,
        ClientService,
        /*HttpHandler*/
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
