import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  imageWidth: number = 50;
  imageMargin: number = 10;
  showImage: boolean = false;
  errorMessage: string;
  constructor(private productService: ProductService) {

  }
  public pageTitle = "Product list";

  onRatingClicked(message: string): void {
    this.pageTitle = "Product list: " + message;
  }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }



  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;

    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[]

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy: filterBy.toLocaleLowerCase();

    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
