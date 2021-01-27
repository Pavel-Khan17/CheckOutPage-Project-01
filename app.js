// first book 
const rvmBtn1 = document.getElementById("rvm-btn1");
const cartItem1 = document.getElementById("cart-item1");
const alertLink1 = document.getElementById("alert-link1");
const alertMessage1 = document.getElementById("alert-message1");
// book remove and alert massage show
rvmBtn1.addEventListener("click", function () {
  cartItem1.style.display = "none";
  alertMessage1.style.display = "block";
});
//alert massage to show
alertLink1.addEventListener("click", function () {
  cartItem1.style.display = "block";
  alertMessage1.style.display = "none";
});
// alert massage remove
document.getElementById("close1").addEventListener("click", function () {
  alertMessage1.style.display = "none";
});


// books price update..
const decrement1 = document.getElementById("decrement1");
const increment1 = document.getElementById("increment1");
let clicks = 1;

increment1.addEventListener("click", incrementOne)
decrement1.addEventListener("click", decrementOne)

function incrementOne() {
  clicks += 1;
  let increasedQuantity = document.getElementById("quantity-box-1").value = clicks;
  document.getElementById("price1").innerHTML = 204 * increasedQuantity;
  totalPriceUpadete()
}

function decrementOne() {
  if (clicks > 1) {
    clicks -= 1;
    document.getElementById("quantity-box-1").value = clicks;
    let updatePrice = document.getElementById("price1").innerHTML - 204;
    document.getElementById("price1").innerHTML = updatePrice
    totalPriceUpadete()
  } else {
    document.getElementById("quantity-box-1").value = 1;
  }
}
// first book


// second book 
const rvmBtn2 = document.getElementById("rvm-btn2");
const cartItem2 = document.getElementById("cart-item2");
const alertLink2 = document.getElementById("alert-link2");
const alertMessage2 = document.getElementById("alert-message2");
// book remove and alert massage show
rvmBtn2.addEventListener("click", function () {
  cartItem2.style.display = "none";
  alertMessage2.style.display = "block";
});
//alert massage to show
alertLink2.addEventListener("click", function () {
  cartItem2.style.display = "block";
  alertMessage2.style.display = "none";
});
// alert massage remove
document.getElementById("close2").addEventListener("click", function () {
  alertMessage2.style.display = "none";
});


// books price update..
const decrement2 = document.getElementById("decrement2");
const increment2 = document.getElementById("increment2");

increment2.addEventListener("click", incrementTwo)
decrement2.addEventListener("click", decrementTwo)
let click = 1;

function incrementTwo() {
  click += 1;
  let increasedQuantity = document.getElementById("quantity-box-2").value = click;
  document.getElementById("price2").innerHTML = 128 * increasedQuantity;
  totalPriceUpadete()
}


function decrementTwo() {
  if (click > 1) {
    click -= 1;
    document.getElementById("quantity-box-2").value = click;
    let updatePrice = document.getElementById("price2").innerHTML - 128;
    document.getElementById("price2").innerHTML = updatePrice
    totalPriceUpadete()
  } else {
    document.getElementById("quantity-box-2").value = 1;
  }
}

// second book


//total price 
function totalPriceUpadete() {

  const price1 = parseFloat(document.getElementById("price1").innerHTML);
  const price2 = parseFloat(document.getElementById("price2").innerHTML);

  document.getElementById("subtotal").innerHTML = price1 + price2 + 'TK.';
  let finalPrice = price1 + price2 + 50 + 'TK.';
  document.getElementById("total").innerHTML = finalPrice;
  document.getElementById("total-price").innerHTML = finalPrice;
  document.getElementById("payable").innerHTML = finalPrice;



}

const giftCheckbox = document.getElementById("gift-checkbox");

giftCheckbox.addEventListener("click", function () {
  const giftWrap = document.getElementById("gift-wrap");
  giftWrap.style.display = "block";

})