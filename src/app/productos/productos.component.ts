import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  categoria: string = '';
  productosFiltrados: any[] = [];
  productos: any[] | undefined;

  constructor(private route: ActivatedRoute, private productosService: ProductosService) {}

  obtenerProductosPorCategoria(categoria: string, data: any[]): any[] {
    const productos = data.filter(producto => producto.categoria === categoria);
    console.log('Productos filtrados:', productos);
    return productos;
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoria = params['categoria']; 
      this.productosService.getJsonData().subscribe(data => {
        this.productosFiltrados = this.obtenerProductosPorCategoria(this.categoria, data);
      });
      console.log('Categoría seleccionada:', this.categoria);
    });
  
    
  }


}


