import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetflixComponent } from './component/netflix/netflix.component';
import { SliderComponent } from './component/slider/slider.component';
import { NetflixsliderComponent } from './component/netflixslider/netflixslider.component';
import { MixsliderComponent } from './component/mixslider/mixslider.component';
import { CarouselComponent } from './browse/carousel/carousel.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'carousel', component: CarouselComponent},
  { path: 'home', component: NetflixComponent},
  { path: 'netflixslider', component: NetflixsliderComponent},
  { path: 'mixslider', component: MixsliderComponent},
  { path: 'slider', component: SliderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
