import { Component } from '@angular/core';
import { ProductAddService } from 'src/app/service/product-add.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  Contenido: any;
  constructor(
    private productos: ProductAddService,
  ) {
    this.productos.getProducts().subscribe((response)=>{
      console.log("DATA", response);
      
      this.Contenido = response['results'];
    }).unsubscribe;

  }



}
