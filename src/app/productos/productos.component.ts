import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})

export class ProductosComponent implements OnInit {
  categoria: string = '';
  productosFiltrados: any[] = [];

  private productos = [
    {
      id: 1,
      nombre: 'Mala Leche',
      categoria: 'cartas',
      descripcion: '“Mala Leche”, una adaptación del juego norteamericano “Cards Against Humanity”, y que consiste en completar una oración utilizando 10 cartas en mano.',
      precio: 19990,
      descuento: true,
      imagen: '/img/malaleche.png'
    },
    {
      id: 2,
      nombre: 'Condorito',
      categoria: 'cartas',
      descripcion: '"Condorito: La Batalla de Pelotillehue" es un juego de mesa emocionante y de rápido desarrollo.',
      precio: 12990,
      descuento: true,
      imagen: '/img/condorito.png'
    },
    {
      id: 3,
      nombre: 'Bang!',
      categoria: 'cartas',
      descripcion: 'En el Salvaje Oeste, los Forajidos dan caza al Sheriff, el Sheriff da caza a los Forajidos, y el Renegado urde su plan en secreto, listo para unirse a cualquiera de los bandos. Dentro de poco, ¡las balas comenzarán a zumbar!',
      precio: 63990,
      descuento: true,
      imagen: '/img/bang.png'
    },
    {
      id: 4,
      nombre: 'Jaipur',
      categoria: 'cartas',
      descripcion: 'En Jaipur, el objetivo es convertirse en el mercader personal del Maharajá consiguiendo más riquezas que tu oponente al final de cada ronda. Para ello, consigue e intercambia productos en el mercado y luego véndelos para obtener rupias. Si consigues hacer una venta grande (tres cartas o más), recibirás una ficha de bonificación.',
      precio: 19990,
      descuento: true,
      imagen: '/img/jaipur.png'
    },
    {
      id: 5,
      nombre: 'Hex Roller',
      categoria: 'dados',
      descripcion: 'Hex Holler es un Roll & Write en el que tendremos que optimizar nuestra hoja escribiendo números.',
      precio: 8990,
      descuento: true,
      imagen: '/img/hex.png'
    },
    {
      id: 6,
      nombre: 'Qwixx',
      categoria: 'dados',
      descripcion: 'En Qwixx no hay tiempos de espera! Cuando alguien tira los dados, todos pueden ganar puntos. Mientras más números marques, más puntos obtendrás al final de la partida.',
      precio: 12990,
      descuento: true,
      imagen: '/img/qwixx.png'
    },
    {
      id: 7,
      nombre: 'Stockpile',
      categoria: 'dados',
      descripcion: '"Stockpile" es un juego de mesa de economía que combina la estrategia de inversión tradicional de comprar bajo, vender alto con varios mecanismos adicionales para crear una experiencia rápida, atractiva e interactiva.',
      precio: 63990,
      descuento: true,
      imagen: '/img/stockpile.png'
    },
    {
      id: 8,
      nombre: 'Monasterium',
      categoria: 'dados',
      descripcion: 'A principios de la Edad Media, en pleno apogeo del poder eclesiástico, se construyeron al menos cinco monasterios en un hermoso valle, designados para difundir la Palabra de Dios. Como decano de una de las principales escuelas catedralicias del país, intentarás acomodar a los novicios que te han confiado en los puestos de mayor relevancia de cada monasterio para que tu escuela gane en prestigio e influencia.',
      precio: 59990,
      descuento: true,
      imagen: '/img/mona.png'
    },
    {
      id: 9,
      nombre: 'Triomino',
      categoria: 'fichas',
      descripcion: 'El Juego De Mesa Triomino de Bisonte es perfecto para disfrutar en familia y desafiar tu mente con su dinámica de estrategia. Este set incluye 56 fichas triangulares serigrafiadas de alta calidad y cuatro atriles antideslizantes, asegurando una experiencia de juego cómoda y duradera.',
      precio: 24990,
      descuento: true,
      imagen: '/img/triomino.png'
    },
    {
      id: 10,
      nombre: 'Domino multicolor',
      categoria: 'fichas',
      descripcion: 'Dominó Multicolor El clásico juego de dominó ¡ahora en colores! Contiene 28 fichas PLASTICAS para +4 años. Jugadores: 2 a 4. MEDIDAS: 180 x 240 x 35 mm.',
      precio: 8990,
      descuento: true,
      imagen: '/img/domino.png'
    },
    {
      id: 11,
      nombre: 'Bingo',
      categoria: 'fichas',
      descripcion: 'Contiene 96 cartones repartidos entre 4 colores, 90 fichas de madera. Medidas: 22 cm de largo x 15,5 cm de alto x 3 cm. Presentación en caja. Edad: +6 años.',
      precio: 18990,
      descuento: true,
      imagen: '/img/bingo.png'
    },
    {
      id: 12,
      nombre: 'Poker',
      categoria: 'fichas',
      descripcion: 'Set De Poker con 100 Fichas numeradas. Contenido: 1 caja metálica contenedora, 100 Fichas de poker numeradas de 1,5,10, y 25, 1 ficha dealer, 2 juegos de naipes de poker.',
      precio: 29990,
      descuento: true,
      imagen: '/img/poker.png'
    },
    {
      id: 13,
      nombre: 'La Broma Macabra',
      categoria: 'rol',
      descripcion: 'Álex de la Iglesia nos da su versión personal de La llamada de Cthulhu en los locos años 20 con esta aventura en la que los investigadores dispondrán de dos días para detener los fenómenos inexplicables que acosan el hotel más lujoso de El Cairo.',
      precio: 39990,
      descuento: true,
      imagen: '/img/broma.png'
    },
    {
      id: 14,
      nombre: 'Marvel Champions',
      categoria: 'rol',
      descripcion: 'El juego de cartas es un Living Card Game® cooperativo que los invita a encarnar a los superhéroes más emblemáticos del mundo.',
      precio: 12990,
      descuento: true,
      imagen: '/img/marvel.png'
    },
    {
      id: 15,
      nombre: 'Star Wars Juego de Rol',
      categoria: 'rol',
      descripcion: 'La Caja de inicio de Star Wars: Al Filo del Imperio contiene una aventura completa que se desarrolla progresivamente para que los jugadores asimilen los fundamentos del sistema de juego sobre la marcha.',
      precio: 24990,
      descuento: true,
      imagen: '/img/starwars.png'
    }
  ];
  producto: any;
  logData(data: any): void {
    console.log(data);
  }
  obtenerProductosPorCategoria(categoria: string) {
    const productos = this.productos.filter(producto => producto.categoria === categoria);
    console.log('Productos filtrados:', productos);
    return productos;
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoria = params['categoria'];
      if (this.categoria) {
        this.productosFiltrados  = this.obtenerProductosPorCategoria(this.categoria);
      }
    });
  }
  
}
