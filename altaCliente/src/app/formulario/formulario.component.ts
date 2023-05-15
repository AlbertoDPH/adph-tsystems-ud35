import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  title = 'formulario';
  nombre = '';
  cif = '';
  direccion = '';
  grupo = '';

  @Input() clientes: any[];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {}

  guardar() {
    const nuevoCliente = {
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo,
    };
    this.clienteService.addCliente(nuevoCliente);

    this.nombre = '';
    this.cif = '';
    this.direccion = '';
    this.grupo = '';
  }
}
