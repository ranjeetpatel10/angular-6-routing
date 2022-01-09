import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { About } from './page/about.component';
import { Service } from './page/service.component';
import { Dashboard } from './page/dashboard.component';
import { OnlyLoggedInUserGaurd } from './page/onlyLoggedInUserGaurd';
import { MyComp } from './mycomp/mycomponent.component';


const appRoute: Route = [
  { path: 'about', component: About },
  { path: 'service', component: Service },
  { path: 'dashboard', component: Dashboard, canActivate: [] }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoute) ],
  declarations: [ AppComponent, HelloComponent, About, Service, Dashboard, MyComp ],
  providers: [OnlyLoggedInUserGaurd],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
OnlyLoggedInUserGaurd