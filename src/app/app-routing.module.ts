import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaragemComponent } from './garagem/garagem.component';
import { VendedorComponent } from './vendedor/vendedor.component';

const routes: Routes = [
{path: 'garagem', component: GaragemComponent},
{path: 'vendedor', component: VendedorComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
