import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit{

  @Input() clientes: any[];


  constructor() { }

  ngOnInit(): void {

  }

}
