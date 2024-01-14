export const cart = [ 

]

export function addtocart(productId){
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
  }

