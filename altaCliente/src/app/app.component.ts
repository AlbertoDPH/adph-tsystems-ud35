import { Component } from '@angular/core';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-root',
  template: `
    <app-formulario></app-formulario>
    <app-list-cliente></app-list-cliente>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ud35-01';

  constructor(private clienteService: ClienteService) {
    this.clienteService.addCliente({
      nombre: 'Cliente1',
      cif: 'B123',
      direccion: 'C/la la la',
      grupo: '1',
    });
    this.clienteService.addCliente({
      nombre: 'Cliente 2',
      cif: 'A334',
      direccion: 'Av.lo lo lo',
      grupo: '2',
    });
  }
}
