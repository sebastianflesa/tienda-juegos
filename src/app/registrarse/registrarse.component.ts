import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators,AbstractControl,ValidationErrors, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent {

limpiarFormulario() {
  this.formularioRegistro.reset();
  Object.keys(this.formularioRegistro.controls).forEach(field => {
    const control = this.formularioRegistro.get(field);
    control?.markAsUntouched({ onlySelf: true });
  });
}

submitForm() {
  
  if (this.formularioRegistro.invalid) {
    Object.keys(this.formularioRegistro.controls).forEach(field => {
      const control = this.formularioRegistro.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
    return;
  }
  console.log(this.formularioRegistro.value);

  
}

formularioRegistro! : FormGroup;

constructor(private fb: FormBuilder) {
  this.formularioRegistro = this.fb.group({
    nombre: ['', Validators.required],
    nombre_usuario: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(18),
        Validators.pattern('^(?=.*[0-9])(?=.*[A-Z]).+$')
      ]
    ],
    password2: ['', Validators.required],
    direccion: [''],
    fecha_nacimiento: ['', [Validators.required, this.validarEdad]]
  }, { validator: this.passwordsMatchValidator });
}

passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const password2 = group.get('password2')?.value;
  return password === password2 ? null : { mismatch: true };
}

validarEdad(control: AbstractControl): ValidationErrors | null {
  const birthDate = new Date(control.value);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();
  if (age > 13 || (age === 13 && (monthDifference > 0 || (monthDifference === 0 && dayDifference >= 0)))) {
    return null;
  }
  return { ageRestriction: true };
}


}
