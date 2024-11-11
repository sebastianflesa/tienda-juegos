import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'productos/:categoria', component: ProductosComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'registrarse', component: RegistrarseComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
];
