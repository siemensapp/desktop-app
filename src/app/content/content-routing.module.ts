import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentFrameComponent } from './content-frame/content-frame.component';
import { WorkersComponent } from './workers/workers.component';
import { EditarEspecialistaComponent } from './editar-especialista/editar-especialista.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EspecialistaComponent } from './especialista/especialista.component';
import { AsignacionComponent } from './asignacion/asignacion.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { AsignacionesEliminadasComponent } from './asignaciones-eliminadas/asignaciones-eliminadas.component';



const routes: Routes = [
    {path: 'home', component: ContentFrameComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: 'workers' },
            { path: 'workers', component: WorkersComponent },
            { path: 'formularioEdicionEspecialista', component: EditarEspecialistaComponent },
            { path: 'verPerfil', component: PerfilComponent },
            { path: 'formularioEspecialista', component: EspecialistaComponent },
            { path: 'formularioAsignacion', component: AsignacionComponent },
            { path: 'cronograma', component: CronogramaComponent },
            { path: 'estadisticas', component: EstadisticasComponent },
            { path: 'asignacionesEliminadas', component:  AsignacionesEliminadasComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContentRoutingModule {}

