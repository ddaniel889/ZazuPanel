import { NgModule                   } from '@angular/core';
import { Routes, RouterModule       } from '@angular/router';
import { ListadoPersonasComponent   } from './personas/listado-personas/listado-personas.component';
import { ComercioListadoComponent   } from './comercio/listado.component';
import { ComercioAgregarComponent   } from './comercio/agregar.component';
import { ComercioDetalleComponent   } from './comercio/detalle.component';
import { AgregarPersonaComponent    } from './personas/agregar-persona/agregar-persona.component';
import { RepartidorListadoComponent } from './repartidor/listado.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TiendaComponent } from './tiendas/tienda/tienda.component';
import { CategoriasComponent } from './tiendas/categorias/categorias.component';
import { TarifasComponent } from './tiendas/tarifas/tarifas.component';
import { BonificacionesComponent } from './tiendas/bonificaciones/bonificaciones.component';
import { RepartidorComponent } from './repartidores/repartidor/repartidor.component';
import { TiposRepartidoresComponent } from './repartidores/tipos-repartidores/tipos-repartidores.component'; 
import { TiposVehiculosComponent } from './repartidores/tipos-vehiculos/tipos-vehiculos.component'; 
import { TarifasrepComponent } from './repartidores/tarifasrep/tarifasrep.component'; 
import { BonificacionesrepComponent } from './repartidores/bonificacionesrep/bonificacionesrep.component'; 
import { CategoriasprodComponent } from './productos/categoriasprod/categoriasprod.component'; 
import { TiendasComponent } from './liquidaciones/tiendas/tiendas.component'; 
import { DetailLTiendaComponent } from './liquidaciones/detail-ltienda/detail-ltienda.component'; 
import { RepartidoresComponent } from './liquidaciones/repartidores/repartidores.component';
import { DetailLRepartComponent } from './liquidaciones/detail-lrepart/detail-lrepart.component'; 
import { CampanasComponent } from './mkt/campanas/campanas.component';
import { InfluencersComponent } from './mkt/influencers/influencers.component'; 
import { PedidosComponent } from './reportes/pedidos/pedidos.component'; 
import { EnviosComponent } from './reportes/envios/envios.component';   
import { ReportescaComponent } from './reportes/reportesca/reportesca.component'; 
import { RrepartidoresComponent } from './repartidores/rrepartidores/rrepartidores.component'; 
import { TiendaDetailComponent } from './tiendas/tienda-detail/tienda-detail.component' 
import { UserDetailComponent } from './tiendas/user-detail/user-detail.component'
import { AdProductosComponent } from './productos/ad-productos/ad-productos.component';
import { EditGenComponent } from './tiendas/edit-gen/edit-gen.component';
import { EditConfigComponent } from './tiendas/edit-config/edit-config.component';
import { EditPlanComponent } from './tiendas/edit-plan/edit-plan.component';
import { EditDataComponent } from './repartidores/edit-data/edit-data.component';
import { EditPComponent } from './repartidores/edit-p/edit-p.component';

const routes: Routes = [
    { path: 'personas/listado',     component: ListadoPersonasComponent   },
    { path: 'personas/agregar',     component: AgregarPersonaComponent    },
    { path: 'comercio/listado',     component: ComercioListadoComponent   },
    { path: 'comercio/agregar',     component: ComercioAgregarComponent   },
    { path: 'comercio/detalle/:id', component: ComercioDetalleComponent   },
    { path: 'repartidor/listado',   component: RepartidorListadoComponent }, 
    { path: 'dashboard',            component: DashboardComponent },  
    { path: 'tiendas/tienda',       component: TiendaComponent  },   
    { path: 'tiendas/categorias',   component: CategoriasComponent  },
    { path: 'tiendas/tarifas',      component: TarifasComponent  },
    { path: 'tiendas/bonificaciones', component: BonificacionesComponent  },
    { path: 'repartidores/repartidor/:id', component: RepartidorComponent  },
    { path: 'repartidores/repartidores', component: TiposRepartidoresComponent },
    { path: 'repartidores/vehiculos', component: TiposVehiculosComponent },
     { path: 'repartidores/rrepartidores', component: RrepartidoresComponent },
    { path: 'repartidores/tarifas', component:  TarifasrepComponent },
    { path: 'repartidores/bonificaciones', component:  BonificacionesrepComponent },
    { path: 'productos/categorias', component:  CategoriasprodComponent },
    { path: 'liquidaciones/tiendas', component:  TiendasComponent },
    { path: 'liquidaciones/repartidores', component:  RepartidoresComponent },
    { path: 'mkt/campanas', component:  CampanasComponent },
    { path: 'mkt/influencers', component:  InfluencersComponent},
    { path: 'reportes/pedidos', component:  PedidosComponent},
    { path: 'reportes/envios', component:  EnviosComponent},
    { path: 'reportes/reportesca', component:  ReportescaComponent},
    { path: 'edit/:id', component:  TiendaDetailComponent},
    { path: 'user/:id', component:  UserDetailComponent},
    { path: 'ltienda/:id', component:  DetailLTiendaComponent},
    { path: 'lrepart/:id', component:  DetailLRepartComponent},
    { path: 'store', component:  TiendaDetailComponent},
    { path: 'editGen', component:  EditGenComponent},
    { path: 'editConfig', component:  EditConfigComponent},
    { path: 'editPlan', component: EditPlanComponent },
    { path: 'editData', component:  EditDataComponent},
    { path: 'editP', component:  EditPComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
