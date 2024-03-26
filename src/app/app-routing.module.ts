import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PanierComponent } from './component/panier/panier.component';
import { ContainerCardSushiBoxesComponent } from './component/container-card-sushi-boxes/container-card-sushi-boxes.component';
import { RgpdComponent } from './component/rgpd/rgpd.component';

const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"panier", component: PanierComponent },
  { path:"boxes", component: ContainerCardSushiBoxesComponent},
  { path:"rgpd", component: RgpdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
