import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../productos.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ProductosService]
})
export class HomeComponent {
  productos: any;

  constructor(private route: ActivatedRoute, private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.getJsonData().subscribe((data) => {
      this.productos = data;
      console.log(this.productos);
    });
    
  }

}
