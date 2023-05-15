import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes: any[] = [];

  addCliente(cliente: any) {
    this.clientes.push(cliente);
  }

  getClientes() {
    return this.clientes;
  }

  constructor() { }
}
