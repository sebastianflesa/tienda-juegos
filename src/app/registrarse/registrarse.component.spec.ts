import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarseComponent } from './registrarse.component';
import { FormsModule, ReactiveFormsModule, AbstractControl, FormControl } from '@angular/forms'; 

describe('RegistrarseComponent', () => {
  let component: RegistrarseComponent;
  let fixture: ComponentFixture<RegistrarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarseComponent, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('validarEdad', () => {
    it('retornar null si la edad es mayor o igual a 13 años', () => {
      const control: AbstractControl = new FormControl('2010-11-14');
      const result = component.validarEdad(control);
      expect(result).toBeNull();
    });

    it('manejar fechas inválidas o vacias', () => {
      const control: AbstractControl = new FormControl('');
      const result = component.validarEdad(control);
      expect(result).toEqual({ ageRestriction: true });
      const invalidControl: AbstractControl = new FormControl('invalid-date');
      const resultInvalid = component.validarEdad(invalidControl);
      expect(resultInvalid).toEqual({ ageRestriction: true });
    });
  });
  
});
