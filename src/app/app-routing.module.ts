import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DatosClienteComponent } from './components/clientes/datos-cliente/datos-cliente.component';
import { TramosTarifaComponent } from './components/clientes/tramos-tarifa/tramos-tarifa.component';


export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirige a dashboard
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clientes/datos-cliente', component: DatosClienteComponent },
  { path: 'clientes/tramos-tarifa', component: TramosTarifaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
