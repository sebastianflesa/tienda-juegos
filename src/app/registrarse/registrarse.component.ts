import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent {
  nombreCompleto: string = '';
  nombreUsuario: string = '';
  correo: string = '';
  clave: string = '';
  repetirClave: string = '';
  fechaNacimiento: string = '';
  direccion: string = '';

  onSubmit() {
    if (this.clave !== this.repetirClave) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    console.log('Datos del formulario:', {
      nombreCompleto: this.nombreCompleto,
      nombreUsuario: this.nombreUsuario,
      correo: this.correo,
      clave: this.clave,
      fechaNacimiento: this.fechaNacimiento,
      direccion: this.direccion
    });
  }
}
