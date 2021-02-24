import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { GaleriaComponent } from './components/main/galeria/galeria.component';
import { TablaComponent } from './components/main/tabla/tabla.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { UsersService } from './components/main/servicios/servicioUsers/users.service';
import { GaleriaService } from './components/main/servicios/servicioGaleria/galeria.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GaleriaComponent,
    TablaComponent,
    
    
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  
  providers: [
    HttpClient,
    UsersService,
    GaleriaService   
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
