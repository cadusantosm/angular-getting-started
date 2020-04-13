import { Injectable } from '@angular/core';
import { IProduct } from '../product-list/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})

export class ProductService {
    private productUrl = "api/products/products.json"
    constructor(private http: HttpClient) {
        
    }
    getProducts(): Observable<IProduct[]> {
       return this.http.get<IProduct[]>(this.productUrl).pipe(
           tap(data=>console.log("All: " + JSON.stringify(data))),
           catchError(this.handleError)
       );
    }
    handleError(handleError: HttpErrorResponse) {
        let errorMessage = "";
        if(handleError.error instanceof ErrorEvent){
            errorMessage = `An error occurred: ${handleError.error.message}`
        }else{
            errorMessage= `Server returned code: ${handleError.status}, error message is ${handleError.message}`
        }

        console.error(errorMessage);
        return throwError(errorMessage);
    }
}