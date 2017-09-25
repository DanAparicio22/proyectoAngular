import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ContactosComponent } from "./components/contactos/contactos.component";
import { ActividadesComponent } from "./components/actividades/actividades.component";
import { HabilidadesComponent } from "./components/habilidades/habilidades.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { ExperienciaComponent } from "./components/experiencia/experiencia.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'experiencia', component: ExperienciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
