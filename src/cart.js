// initializing an empty array
let basket = JSON.parse(localStorage.getItem("Data")) || [];
// getting the div with id "label" to dynamically render total amount
let label = document.getElementById("label");
// getting the div with id "boughtitems" to dynamically render selected items
let boughtItems = document.getElementById("boughtItems");
// calculating the total number of items in basket
let calculation = () => {
  let cartIcon = document.getElementById("cartamount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();
// generating items to render on cart page
let generateboughtItems = () => {
  if (basket.length != 0) {
    return (boughtItems.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemData.find((y) => y.id === id);
        return `
        
      <div class="cartitems">
        <img width=150 src=${search.img} alt="" />
        <div class="title-price-cross">
        <h4>
           <div class="title">
        <p>${search.name}</p>
        <p id="product-price"> $ ${search.price} </p>
        </div>
        </h4>
        <div class="btn">
        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
        <div id=${id} class="quantity"> ${item}
  
        </div>
        <i onclick="decrement(${id})" class="bi bi-dash"></i>
        </div>
        <div class="total-trash">
          <h3>Total $ ${item * search.price}</h3>
          <i onclick="removeItems(${id})" class="bi bi-trash3-fill"></i>
        </div>
        </div>
    </div>
    
    `;
      })
      .join(""));
  } else {
    label.innerHTML = `
        <h2> Cart is Empty </h2>
        <a href="products.html">
        <Button class="button">Go back </Button> </a> `;
  }
};
generateboughtItems();

// incerementing function to increment items if + button is pressed
let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  generateboughtItems();
  update(selectedItem.id);
  localStorage.setItem("Data", JSON.stringify(basket));
};
// decerementing function to decrement items if - button is pressed

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateboughtItems();
  localStorage.setItem("Data", JSON.stringify(basket));
};
// Updating the basket if any increment or decrement is done
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};
// function to remove items if trash button is pressed
let removeItems = (id) => {
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem.id);
  localStorage.setItem("Data", JSON.stringify(basket));
  generateboughtItems();
  calculation();
  TotalAmount();
  if (basket.length === 0) {
    boughtItems.style.visibility = "hidden";
  }
};
// function to clear cart id "clear cart" button is pressed
let ClearCart = () => {
  boughtItems.style.visibility = "hidden";
  basket = [];
  generateboughtItems();
  localStorage.setItem("Data", JSON.stringify(basket));
  calculation();
};
// function to generate the total amount
let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = shopItemData.find((y) => y.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);

    label.innerHTML = `<hr><h2>Total Bill : $ ${amount}</h2>
        <Button class="checkout">Check Out</Button>
        <Button onclick="ClearCart()" class="clearcart">Clear Cart</Button>
        `;
  } else return;
};

TotalAmount();
