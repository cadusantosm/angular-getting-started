import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart'
  
  }
  public pageTitle ="Product list";

  onRatingClicked(message: string): void{
    this.pageTitle = "Product list: " + message;
  }

  ngOnInit() {
  }

  imageWidth: number = 50;
  imageMargin: number = 10;
  showImage: boolean = false;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;

    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [{
    "productId": 1,
    "productName": "Garden Cart",
    "productCode": "GDN-002",
    "releaseDate": "March 18, 2020",
    "description": "15 gallom capacity",
    "price": 55.22,
    "starRating": 4.1,
    "imageUrl": "assets/images/garden_cart.png"
  },{
    "productId": 2,
    "productName": "Garden",
    "productCode": "GDN-003",
    "releaseDate": "March 18, 2020",
    "description": "15 gallom capacity",
    "price": 55.22,
    "starRating": 3.1,
    "imageUrl": "assets/images/garden_cart.png"
  }]

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy: filterBy.toLocaleLowerCase();

    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
