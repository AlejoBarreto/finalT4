import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../productos.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  productos: Array<any>;

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.getAll().subscribe(data => {
      this.productos = data._embedded.productoses;
   });
  }

}
