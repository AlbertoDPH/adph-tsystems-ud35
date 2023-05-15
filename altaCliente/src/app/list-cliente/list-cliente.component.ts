import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';


@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css'],
})
export class ListClienteComponent implements OnInit {
  clientes: any[];

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.clientes = this.clienteService.getClientes();
  }

}
