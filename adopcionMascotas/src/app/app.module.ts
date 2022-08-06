import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { ValidateComponent } from './validate/validate.component';
import { AdoptanteComponent } from './adoptante/adoptante.component';
import { FiltroComponent } from './filtro/filtro.component';
import { InformacionComponent } from './informacion/informacion.component';
import { InformacionFundacionComponent } from './informacion-fundacion/informacion-fundacion.component';
import { PrincipalfundacionComponent } from './principalfundacion/principalfundacion.component';


import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

 


import { SplashComponent } from './splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    ValidateComponent,
    AdoptanteComponent,
    FiltroComponent,
    InformacionComponent,
    InformacionFundacionComponent,
    PrincipalfundacionComponent,
    SplashComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,  
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
