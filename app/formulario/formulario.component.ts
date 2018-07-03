import { Component, OnInit } from '@angular/core';
import { formulario } from './formulario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  model = new formulario('',0 ,0,'');
  
  onSubmit() {
    console.log('Nombre Producto: ' + this.model.nombre + 
    'Precio: ' + this.model.precio +
    'Cantidad: ' + this.model.cantidad +
    'Categoria: ' + this.model.categoria)
    ;
    }
  constructor() { }

  ngOnInit() {
  }

}
