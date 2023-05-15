import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit{

  @Input() clientes: any[];

  nombre ='';
  cif='';
  direccion='';
  grupo='';

  constructor() { }

  ngOnInit(): void {

  }


  guardar() {
    console.log('Nombre:',this.nombre);
    console.log('CIF:',this.cif);
    console.log('Direccion:',this.direccion);
  }

}
