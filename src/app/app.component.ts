import { Component } from '@angular/core';
import {Producto} from './Model/producto.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Rogger Lindao';
  age = 50;
  disabled = true;
  img="https://images5.alphacoders.com/132/1328421.png";
  TextoEventoBtn="";
  person = {
    name:'Rogger',
    edad:50,
    img:"https://images5.alphacoders.com/132/1328421.png"
  }
  listaName:string[]=['Rogger','Nathaly','Andres'];
  listaProducto : Producto[]=
  [
    {
      nombre:'Jarra',
      precio:10,
      image:'https://www.compuidea.net/store4/559-large_default/jarro-blanco-importado-11-onzas-interior-y-oreja-rojo-aaa-economico.jpg'
    },
    {
      nombre:'Impresora',
      precio:9999,
      image:'https://www.compuidea.net/store4/1382-large_default/epson-refurbished-dtf-1410-formato-a3.jpg'
    },
    {
      nombre:'Plotter',
      precio:500000,
      image:'https://www.compuidea.net/store4/1309-large_default/plotter-de-corte-cameo-4-plus-ancho.jpg'
    },
    {
      nombre:'Plotter',
      precio:500000,
      image:'https://www.compuidea.net/store4/1309-large_default/plotter-de-corte-cameo-4-plus-ancho.jpg'
    },
    {
      nombre:'Plotter',
      precio:600000,
      image:'https://www.compuidea.net/store4/1309-large_default/plotter-de-corte-cameo-4-plus-ancho.jpg'
    },
    {
      nombre:'Plotter',
      precio:700000,
      image:'https://www.compuidea.net/store4/1309-large_default/plotter-de-corte-cameo-4-plus-ancho.jpg'
    },
    {
      nombre:'Plotter',
      precio:800000,
      image:'https://www.compuidea.net/store4/1309-large_default/plotter-de-corte-cameo-4-plus-ancho.jpg'
    },
    {
      nombre:'Plotter',
      precio:500000,
      image:'https://www.compuidea.net/store4/1309-large_default/plotter-de-corte-cameo-4-plus-ancho.jpg'
    },
    {
      nombre:'Plotter',
      precio:500000,
      image:'https://www.compuidea.net/store4/1309-large_default/plotter-de-corte-cameo-4-plus-ancho.jpg'
    },
    {
      nombre:'Plotter',
      precio:500000,
      image:'https://www.compuidea.net/store4/1309-large_default/plotter-de-corte-cameo-4-plus-ancho.jpg'
    }
  ];
  newName : string='';

  clickBoton(){
    this.TextoEventoBtn="Ha pulsado el boton";
    this.age=this.age+1;
  }
  AgregarNombre()
  {
    this.listaName.push(this.newName);
    this.newName='';
  }
  EliminarNombre(index:number)
  {
    this.listaName.splice(index,1);
  }
}
