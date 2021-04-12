import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CartComponent } from 'src/app/shared/component/cart/cart.component';
import { HeaderService } from 'src/app/header/header.service';
import { AppService } from 'src/app/shared/services/app.service';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: any = [];
  categories: any = [];
  productPerRow: any = [];
  sub: any;
  categoryName: any;
  hideShowProductList: boolean = false;
  categoryList: any = [];
  filteredProduct: any = [];
  showCartModal: boolean = false;

  addTocart: any = {};

  constructor(
    private _activatedroute: ActivatedRoute,
    private _productService: ProductService,
    private _appService: AppService,
    public dialog: MatDialog,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this.fetchCategories();
    this.fetchProduct(this._activatedroute.snapshot.data['productDetail']);
  }

  fetchCategories() {
    this._appService.getCatagories().subscribe((data) => {
      this.categories = data;
      this._productService.category = data;
      this.categoryList = this.categories.sort((a, b) => {
        return a.order - b.order;
      });
    });
  }

  fetchProduct(data) {
    if (data.length > 0) {
      this.product = data;
      this._productService.product = data;
      this.productPerRow = this.buildProductArr(data);
    }
  }

  buildProductArr(product: any): any {
    let result = [];
    for (var i = 0; i < product.length; i += 4) {
      var row = [];
      for (var x = 0; x < 4; x++) {
        var value = product[i + x];
        if (!value) {
          break;
        }
        row.push(value);
      }
      result.push(row);
    }
    return result;
  }

  getProductByCategory(id: any) {
    this.hideShowProductList = true;
    let prod: any = [];
    this.product.forEach((element) => {
      if (element.category === id) prod.push(element);
    });
    console.log('product per prod =============', prod);
    this.filteredProduct = this.buildProductArr(prod);
    console.log('product per category =============', this.filteredProduct);
  }

  buyProduct(product: any) {
    this._cartService.addProductToCart(product);
  }
}
