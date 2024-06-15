// initializing element with id "shop" to dynamically rendering shop items
let shop = document.getElementById("shop");
// initializing an empty array
let basket = JSON.parse(localStorage.getItem("Data")) || [];
// initializing element with id "searchinput" to dynamically render suggestions

const searchInput = document.getElementById("searchInput");
// initializing element with id "suggestions" to dynamically render suggestions

const suggestionsDiv = document.getElementsByClassName("suggestions")[0];

// function to add an event listener on input box to catch the input
searchInput.addEventListener("input", function () {
  const query = this.value;
  if (query.length > 0) {
    getSuggestions(query);
  } else {
    suggestionsDiv.style.display = "none";
  }
});
// function to check the entered keywords in input box
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    // ^ prevents the default actions i.e.inout field submits data when 'enter' is pressed
    suggestionsDiv.style.display = "none";
  }
});
// adding an event listener to the suggestionsDiv for click events
suggestionsDiv.addEventListener("click", function (event) {
  if (event.target.tagName === "DIV") {
    searchInput.value = event.target.textContent;
    suggestionsDiv.style.display = "none";
    handleSearch(searchInput.value);
  }
});
// function to show suggestions
function getSuggestions(query) {
  const allSuggestions = ["Shirts", "Shoes", "Pants", "Hat", "Scarf", "Jacket"];
  const filteredSuggestions = allSuggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  showSuggestions(filteredSuggestions);
}
// rendering suggestions
function showSuggestions(suggestions) {
  if (suggestions.length > 0) {
    suggestionsDiv.innerHTML = "";
    suggestions.forEach((suggestion) => {
      const suggestionDiv = document.createElement("div");
      suggestionDiv.textContent = suggestion;
      suggestionsDiv.appendChild(suggestionDiv);
    });
    suggestionsDiv.style.display = "block";
  } else {
    suggestionsDiv.style.display = "none";
  }
}

generateshop();
// increment function
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
  // console.log(basket)
  update(selectedItem.id);
  localStorage.setItem("Data", JSON.stringify(basket));
};
// decerement function
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
  // console.log(basket)
  localStorage.setItem("Data", JSON.stringify(basket));
};
// updating the quantity of specific item in basket
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};
// calculating the total number of items in basket
let calculation = () => {
  let cartIcon = document.getElementById("cartamount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();
