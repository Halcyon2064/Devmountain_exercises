///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
let reducer = (cart)=>{
    return cart.map((item)=>item.price).reduce((prev_value, curr_value) => prev_value + curr_value, 0)
}

console.log(reducer(cart))



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

let calcFinalPrice = (cartTotal, couponValue, tax) =>{
    return(cartTotal+(tax*cartTotal)-couponValue)
}

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
Property 1: Name. The restaurant needs to identidy who made the order.
Property 2: Order. The restaurant will know what the customer ordered.
Property 3: Amount. The restaurant will know how many of that object is needed.
Property 4: Table. The restaurant needs to know what table the customer is in to give him the order.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const Customer = {
    Name:'Joe m.',
    Order: 'Pizza ala putanesca',
    Amount: 1,
    table:15
}