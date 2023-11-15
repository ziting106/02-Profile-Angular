import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { CharmingComponent } from './charming/charming.component';
import { IfDesignComponent } from './if-design/if-design.component';
import { MomBabyComponent } from './mom-baby/mom-baby.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'aboutMe',component:AboutMeComponent},
  {path:'charming',component:CharmingComponent},
  {path:'ifDesign',component:IfDesignComponent},
  {path:'momBaby',component:MomBabyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
