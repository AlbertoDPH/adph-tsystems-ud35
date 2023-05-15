import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css'],
})
export class ListClienteComponent implements OnInit {
  // Array para almacenar la lista de clientes
  clientes: any[];

  // Inyectamos el servicio ClienteService en el constructor
  constructor(private clienteService: ClienteService) {}

  // Metodo que se ejecuta al inicializarse el componente
  ngOnInit() {
    // Obtenemos los clientes del servicio y los almacenamos en el array de clientes
    this.clientes = this.clienteService.getClientes();
  }
}
