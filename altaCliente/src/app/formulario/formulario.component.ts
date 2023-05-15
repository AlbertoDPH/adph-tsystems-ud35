import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit{
  title ='formulario';
  nombre = '';
  cif = '';
  direccion = '';
  grupo = '';

  @Input() clientes: any[];

  constructor() {}

  ngOnInit(): void {}

  guardar() {
    this.clientes.push
    console.log('Nombre:', this.nombre);
    console.log('CIF:', this.cif);
    console.log('Direccion:', this.direccion);
  }
}
