import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { ContentFrameComponent } from './content-frame/content-frame.component';
import { WorkersComponent } from './workers/workers.component';
import { EditarEspecialistaComponent } from './editar-especialista/editar-especialista.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EspecialistaComponent } from './especialista/especialista.component';
import { AsignacionComponent } from './asignacion/asignacion.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { AsignacionesEliminadasComponent } from './asignaciones-eliminadas/asignaciones-eliminadas.component';

import { AuthGuardService as AuthGuard } from '../authService/auth-guard.service';




const routes: Routes = [
    {path: 'home', component: ContentFrameComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: 'workers' },
            { path: 'workers', component: WorkersComponent, canActivate: [AuthGuard] },
            { path: 'formularioEdicionEspecialista', component: EditarEspecialistaComponent, canActivate: [AuthGuard] },
            { path: 'verPerfil', component: PerfilComponent, canActivate: [AuthGuard] },
            { path: 'formularioEspecialista', component: EspecialistaComponent, canActivate: [AuthGuard] },
            { path: 'formularioAsignacion', component: AsignacionComponent, canActivate: [AuthGuard] },
            { path: 'cronograma', component: CronogramaComponent, canActivate: [AuthGuard] },
            { path: 'estadisticas', component: EstadisticasComponent, canActivate: [AuthGuard] },
            { path: 'asignacionesEliminadas', component:  AsignacionesEliminadasComponent, canActivate: [AuthGuard] }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContentRoutingModule {}

