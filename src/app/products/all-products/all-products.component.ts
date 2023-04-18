import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  allProducts:any=[]
  searchkey:string=''
  constructor(private api:ApiService){
    
  }

  ngOnInit(): void {
    //make api call to get all products
    this.api.getAllProducts().subscribe(
      (result:any)=>{
        console.log(result);
        this.allProducts = result
      },
      (result:any)=>{
        console.log(result.error);
        
      }
    )

    //get behaviour subject from api service
    this.api.searchTerm.subscribe((result:any)=>{
      console.log(result);
      this.searchkey = result
    })
  }

  //addtocart(product)
  addtocart(product:any){
    //add quantity key to product object with value as 1
    Object.assign(product,{quantity:1})
    console.log(product);
    
    //call api
    this.api.addToCart(product)
    .subscribe(
      //200 response
      (result:any)=>{
        //call method to get cart count
        this.api.cartCount()
        alert(result)
      },
      (result:any)=>{
        alert(result.error)
      }
    )
  }
}
