// console.log("javascript is workiing in browser");
// let restaurantName = "BiteBox";
// let coustomerName = prompt("Welcome to the " + restaurantName + "!\nWhat is your name?")
// alert("Hello " + coustomerName + " \n\n\n\n\nWelcome to the BiteBox")

// let exploreMenu = alert("Would you like to Explore Menu_?")

// if (exploreMenu){
//     alert("Great! Let's explore the BiteBox Menu.")

// }
// else{
//     alert("No problem! You can explore the menu anytime.")
// }

// let choise = prompt(
//     "Choose a BiteBox Catagory\n"+
//     "1.Pizza\n"+
//     "2.Burger\n"+
//     "3.pasta\n"+
//     "4.Momoes\n"
// ) 

// switch(choise){
//     case "1":
//         alert("You selected Pizza")
//         break
//     case "2":
//         alert("You selected Burger")
//         break
//     case "3":
//         alert("You selected Pasta")
//         break
//     case "4":
//         alert("You selected Momoes")
//         break
// }

// for(let i = 1 ; i <=3 ; i++){
//     let food = prompt("Choose Food Item " + i)
//     let quantites = prompt ("Enter Quentity for " + food)
//     console.log(food + "- quenntites :" + quantites);
    
// }

// the Item Total Calculation Function


function calculateItemTotal(price, quantity) {
    return price * quantity;
}


function calculateSubTotal(){
    let subtotal = 0                                                           // initial value is 0
    let cartRow = document.querySelectorAll("#shopping-cart tbody tr")         //collection of matching rows, not a single row.

    cartRow.forEach((row) =>{                                                  //take every row from the collection and execute the code inside the loop for that row.
        let priceText = row.children[1].textContent                            //The children property accesses the row's child elements.
        let price = parseFloat(priceText.replace("₹","")) 

        let quentityText = row.querySelector(".quantity-box span").textContent  //Get the product quantity
        let quentity = parseInt(quentityText)                                   //Convert quantity text into a number
        let itemTotal = calculateItemTotal(price, quentity)                     //Calculate the total for one product

        subtotal += itemTotal                                                   //Add the product total to the subtotal
    })
return subtotal                                                                 //Return the final subtotal
}

//Calculate Delivery Charges

function calculateDeliveryCharge (subtotal){
    if (subtotal === 0){
        return 0
    }else{
        return 40
    }
}
// Calculate Packaging Charges
function calculatePackageingCharge (subtotal){
    if (subtotal === 0){
        return 0
    }else{
        return 40
    }
}

// Calculate Discount
function calculateDiscount(subtotal){
    if(subtotal > 500){
        return subtotal * 0.10 
    }
    return 0 
}  

// Calculate final amount
function calculateTotal(subtotal,deliveryCharges,packageingCharges,discount){
    return subtotal + deliveryCharges + packageingCharges - discount
}


// Update the Order Summary
function updateOrderSummary(){
    let subtotalElement = document.getElementById("subtotal-amount")
    if(!subtotalElement){
        return
    }
    let subtotal = calculateSubTotal()
    let deliveryCharges = calculateDeliveryCharge(subtotal)
    let packagingCharges = calculatePackageingCharge(subtotal)
    let discount =calculateDiscount(subtotal)
    let totalAmount = calculateTotal(subtotal,deliveryCharges,packagingCharges,discount)

    document.getElementById("subtotal-amount").textContent = "₹" + subtotal.toFixed(2)
    document.getElementById("delivery-amount").textContent = "₹" + deliveryCharges.toFixed(2)
    document.getElementById("packaging-amount").textContent = "₹" + packagingCharges.toFixed(2)
    document.getElementById("discount-row").textContent = "₹" + discount.toFixed(2)
    document.getElementById("total-amount").textContent = "₹" + totalAmount.toFixed(2)
    
}
updateOrderSummary()