import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './data.service';

import { routing }             from './app.routing';
import { AppComponent }        from './app.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { HeroesComponent }     from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroService }         from './heroes/shared/hero.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
