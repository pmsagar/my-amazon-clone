import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkoutproducts',
  templateUrl: './checkoutproducts.component.html',
  styleUrls: ['./checkoutproducts.component.css']
})
export class CheckoutproductsComponent implements OnInit {

  @Input()
  checkout_products:any[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()
  constructor(public shopping_cart:ShoppingCartService) { }

  ngOnInit(): void {

  }

  removeItem = (p)=>{
    this.shopping_cart.removeItem(p);
    this.deleteEvent.emit(p);
  }

}
