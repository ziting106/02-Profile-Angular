import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CharmingComponent } from './charming/charming.component';
import { IfDesignComponent } from './if-design/if-design.component';
import { MomBabyComponent } from './mom-baby/mom-baby.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, AboutMeComponent, CharmingComponent, IfDesignComponent, MomBabyComponent],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
