import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductosService } from './productos.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { HeaderComponent } from './header/header.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    HeaderComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
