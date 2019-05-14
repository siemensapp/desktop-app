import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsriMapComponent } from './esri-map/esri-map.component';
import { ContentFrameComponent } from './content-frame/content-frame.component';
import { WorkersComponent } from './workers/workers.component';

import { ContentRoutingModule } from './content-routing.module';
import { EditarEspecialistaComponent } from './editar-especialista/editar-especialista.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EspecialistaComponent } from './especialista/especialista.component';
import { AsignacionComponent } from './asignacion/asignacion.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AsignacionesEliminadasComponent } from './asignaciones-eliminadas/asignaciones-eliminadas.component';
import { JwtModule } from '@auth0/angular-jwt';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [EsriMapComponent, ContentFrameComponent, WorkersComponent, EditarEspecialistaComponent, PerfilComponent, EspecialistaComponent, AsignacionComponent, CronogramaComponent, EstadisticasComponent, AsignacionesEliminadasComponent],
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    CommonModule,
    ContentRoutingModule,
    NgCircleProgressModule.forRoot({})
  ]
})
export class ContentModule { }
