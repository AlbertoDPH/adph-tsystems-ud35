import { Component } from '@angular/core';
// Importamos ClienteService, que es un servicio creado para controlar los datos de los clientes.
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-root',
  // Renderizando los componentes app-formulario y app-list-cliente.
  template: `
    <app-formulario></app-formulario>
    <app-list-cliente></app-list-cliente>
  `,
  styleUrls: ['./app.component.css'],
})
// Definimos la clase AppComponent, que es el controlador de este componente.
export class AppComponent {
  title = 'ud35-01';

  // Inyectando ClienteService en el constructor, que se utilizara para controlar los datos de los clientes.
  constructor(private clienteService: ClienteService) {
    // Utilizamos el metodo addCliente del servicio para añadir clientes de prueba.
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
