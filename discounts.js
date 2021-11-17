/* const precio = 100;
const descuento = 18; */


function CalculaPrecioConDescuento ( price, discount) {
    const porcentajePrecioConDescuento = 100 - discount;
    const precioConDescuento = (price * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount () {
    const selectProduct = document.getElementById("selectProduct");
    const priceValue = selectProduct.value;

    const inputCoupons = document.getElementById("inputCoupons");
    const couponValue =  inputCoupons.value;

    const coupons = [
        "labakery10",
        "labakery20",
        "labakery30",
    ];

    let discount;
    switch (couponValue) {
        case "labakery15":
        discount = 15;
        break;
        case "labakery20":
        discount = 20;
        break;
        case  "labakery30":
        discount = 30;
        break;
        default: 
        alert("wrong coupon code"); 
        return;
    }

    const breads = [
        "Croissant box $1500",
        "Garlic bread $200",
        "Doughnuts box $1000",
        "Ciabatta bread $300",
    ];
    let price;
    switch (priceValue) {
        case "Croissant box $1500":
        price = 1500;
        break;
        case "Garlic bread $200":
        price = 200;
        break;
        case  "Doughnuts box $1000":
        price = 1000;
        break;
        case  "Ciabatta bread $300":
        price = 300;
        break;
     
    }

    console.log({ price, discount, priceValue });
    const precioConDescuento = CalculaPrecioConDescuento (price, discount);
    const resultPrice = document.getElementById("ResultPrice");

    /* resultPrice.innerText = "el precio con descuento son: $" + precioConDescuento; */
    alert( " The NEW PRICE is: $" + precioConDescuento);

    
 

}


/* console.log({
    precioOriginal,
    descuento,
    precioConDescuento,
    porcentajePrecioConDescuento,

}); */
