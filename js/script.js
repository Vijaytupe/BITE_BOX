// ==================================
// [   Restaurant Billing System    ]
// ==================================

// Total Calculation Function 

function calculateTotal(price, quantity){
    return price * quantity
}

let cartRows = document.querySelectorAll(
    "#shopping-cart tbody tr"
);

// Calculate the Cart Subtotal
function calculateSubtotal(){
    let subtotal = 0
    let cartRow = document.querySelectorAll("#shopping-cart tbody tr")

    cartRow.forEach(function(row){
        let priceText = row.children[1].textContent
        let price = parseFloat(priceText.replace("₹" , ""))

        let quantityText = row.querySelector(".quantity-box span").textContent
        let quantity = parseInt(quantityText)

        let itemTotal = calculateTotal(price, quantity)
        subtotal += itemTotal
    })
    return subtotal
}

// Calculate Delivery Charges
function calculateDeliveryCharges(subtotal){
    if(subtotal === 0){
        return 0
    }else{
        return 40
    }
}
// Calculate Packaging Charges
function calculatePackagingCharges(subtotal){
    if(subtotal === 0){
        return 0
    }else{
        return 15
    }
}

// Calculate Discount
function calculateDiscount(subtotal){
    if(subtotal > 500){
        return subtotal * 0.10
    }else{
        return 0
    }
}

let subtotal = calculateSubtotal()
let deliveryCharges = calculateDeliveryCharges(subtotal)
let packagingCharges = calculatePackagingCharges(subtotal)
let discount = calculateDiscount(subtotal)
let totalAmount = (subtotal + deliveryCharges + packagingCharges) - discount 

console.log(totalAmount);

// Update the Order Summary
function updateOrderSummary(){
    let subtotalElement = document.getElementById("subtotal-amount").textContent
    if(!subtotalElement){
        return
    }
    
    document.getElementById("subtotal-amount").textContent = "₹" + subtotal.toFixed(2)
    document.getElementById("delivery-amount").textContent = "₹" + deliveryCharges.toFixed(2)
    document.getElementById("packaging-amount").textContent = "₹" + packagingCharges.toFixed(2)
    document.getElementById("discount-amount").textContent = "₹" + discount.toFixed(2)
    document.getElementById("total-amount").textContent = "₹" + totalAmount.toFixed(2)


}
updateOrderSummary()
// _________________________________________________________________________________________________________________________
//
// ⭐ successfully transformed the static BiteBox Order Summary into a dynamic restaurant billing system using JavaScript.⭐
// _________________________________________________________________________________________________________________________

