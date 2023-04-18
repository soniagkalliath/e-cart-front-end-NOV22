import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //to hold search term as behaviour subjecr
  searchTerm = new BehaviorSubject('')
  //to hold cart total count
  cartItemCount = new BehaviorSubject(0)

  //BASE_URL = 'http://localhost:3000'
  // deployed node server - https://ecart-reh0.onrender.com/
  BASE_URL = 'https://ecart-reh0.onrender.com'
  
  constructor(private http:HttpClient) { 
    this.cartCount()
  }

  //get all products api
  getAllProducts(){
    //call api
    return this.http.get(`${this.BASE_URL}/products/get-all-products`)
  }

  //VIEW producct detail api
  viewAproduct(id:any){
    //call api
    return this.http.get(`${this.BASE_URL}/products/${id}`)
  }
  
  //products/add-to-wishlist
  addtowishlist(product:any){
    const body={
      id:product.id,
      title:product.title,
      price:product.price,
      image:product.image
    }
    //api call
    return this.http.post(`${this.BASE_URL}/products/add-to-wishlist`,body)
  }

  //get all items from wishlist
  getWishlistItems(){
    //api call
    return this.http.get(`${this.BASE_URL}/wishlist/get-all-items`)
  }
  //removing an item from wishlist
  removeWishlistItem(id:any){
    //api call
    return this.http.delete(`${this.BASE_URL}/wishlist/remove-item/${id}`)
  }

  //addto cart
  addToCart(product:any){
    const body = {
      id:product.id,
      title:product.title,
      price:product.price,
      image:product.image,
      quantity:product.quantity
    }
    //api call
    return this.http.post(`${this.BASE_URL}/products/add-to-cart`,body)
  }

  //getcart
  getCart(){
    //api call
    return this.http.get(`${this.BASE_URL}/cart/get-all-items`)
  }
  
  //cartCount
  cartCount(){
    this.getCart().subscribe(
      (result:any)=>{
        this.cartItemCount.next(result.length)
      }
    )
  }
  
  //remove cart item api 
  removeCartItem(id:any){
    //api call
    return this.http.delete(`${this.BASE_URL}/cart/item/${id}`)
  }
  
  //incremnet cart item
  incrCartItem(id:any){
//api call
return this.http.get(`${this.BASE_URL}/cart/increment-item/${id}`)
  }

    //decremnet cart item
    decrCartItem(id:any){
      //api call
      return this.http.get(`${this.BASE_URL}/cart/decrement-item/${id}`)
        }

        //emptyCart

  emptyCart(){
    //api call
    return this.http.delete(`${this.BASE_URL}/cart/empty-cart`)
  }

}
