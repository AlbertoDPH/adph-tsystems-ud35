import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
  <app-formulario [clientes]="clientes"></app-formulario>
  <app-list-cliente [clientes]="clientes"></app-list-cliente>

`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ud35-01';
  clientes: { nombre: string; cif: string; direccion: string; grupo: string; }[];

  constructor(){
    this.clientes = [
      { nombre: 'Cliente1', cif: 'B123', direccion: 'C/la la la', grupo: '1' },
      { nombre: 'Cliente 2', cif: 'A334', direccion: 'Av.lo lo lo', grupo: '2' },
    ];
  }

}
