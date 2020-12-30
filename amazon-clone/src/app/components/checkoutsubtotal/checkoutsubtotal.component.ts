import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkoutsubtotal',
  templateUrl: './checkoutsubtotal.component.html',
  styleUrls: ['./checkoutsubtotal.component.css']
})
export class CheckoutsubtotalComponent implements OnInit {

  constructor(public shopping_cart:ShoppingCartService) { }

  ngOnInit(): void {
  }

}
