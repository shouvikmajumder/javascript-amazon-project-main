import { cart } from "../data/cart.js";
import { products } from "../data/products.js";


let productshtml = "" ;
products.forEach((product)=>{
    productshtml += 
    `<div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
    
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart ">
      <img src=${product.image}>
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-ID = "${product.id}">
      Add to Cart
    </button> 
  </div>`
  
 
})


document.querySelector('.js-products-grid').innerHTML = productshtml

document.querySelectorAll(".js-add-to-cart").forEach((button)=>{
    button.addEventListener("click",()=>{
        const productId = button.CDATA_SECTION_NODE.productId 
        let mathchingItem; 
        cart.forEach((item)=>{
            if(productId === item.productId){
                mathchingItem = item 
            }
        })
        if(mathchingItem){
            mathchingItem.quantity +=1
        } else{
            cart.push({
                productId: productId,
                quantity: 1
            })
        }
        
        let count = 0
        
        cart.forEach((item)=>{
            count += item.quantity
        })
        
        document.querySelector(".js-cart-quantity").innerHTML = count

    }) 
})


