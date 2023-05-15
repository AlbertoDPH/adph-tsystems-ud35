import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  title = 'formulario';
  // Variables para almacenar los datos del formulario
  nombre = '';
  cif = '';
  direccion = '';
  grupo = '';

  @Input() clientes: any[];
  // Se obtiene una instancia del servicio ClienteService
  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {}

  // Metodo para guardar los datos del formulario en el servicio
  guardar() {
    // Crear el objeto nuevoCliente con los datos del formulario
    const nuevoCliente = {
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo,
    };
    // Utilizar el metodo addCliente del servicio para guardar el nuevo cliente
    this.clienteService.addCliente(nuevoCliente);

    this.nombre = '';
    this.cif = '';
    this.direccion = '';
    this.grupo = '';
  }
}
