import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../shared/component/cart/cart.component';
import { CartService } from '../shared/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  productsInCart: any;

  constructor(
    private _modalService: NgbModal,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this._cartService.getCartList.subscribe((item) => {
      this.productsInCart = item;
    });
  }

  openCart(): void {
    this._modalService.open(CartComponent, { ariaLabelledBy: 'cartTitle' });
  }
}
