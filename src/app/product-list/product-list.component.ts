import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imageWidth: number =50;
  imageMargin: number =10;
  showImage: boolean =false;
  listFilter: string = 'Cart';
  
  products: any[]=[{
    "productId":1,
    "productName": "Garden Cart",
    "productCode": "GDN-002",
    "releaseDate": "March 18, 2020",
    "description": "15 gallom capacity",
    "price": 55.22,
    "starRating": 4.1,
    "imageUrl": "assets/images/garden_cart.png"
  }]

  toggleImage():void{
    this.showImage= !this.showImage;
  }
}
