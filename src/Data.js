// Fucntion for dynamically creating Products for product page
let generateshop = () => {
  return (shop.innerHTML = shopItemData
    .map((x) => {
      let { id, price, name, img, des } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
        <div class="itemsData">
            <img src="${img}" alt="clothes">
            <div class="details">
                <h3>${name}</h3>
                <p>${des}</p>
                <div id="price-quantity">
                    <h3>$ ${price}</h3>
                    <button class="btn">
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        <div id="${id}" class="quantity">
                        ${search.item === undefined ? 0 : search.item}
                        </div>
                        <i onclick="decrement(${id})" class="bi bi-dash"></i>
                    </button>
                </div>
            </div>
        </div>
        `;
    })
    .join(""));
};
// array to contain items listed on products page
let shopItemData = [
  {
    id: "ItemNO1",
    name: "BAGGY FIT RESORT COLLAR FIT SHIRT",
    price: 300,
    img: "img/men1.webp",
    des: "A stylish baggy fit resort collar shirt perfect for casual wear.",
  },
  {
    id: "ItemNO2",
    name: "BAGGY FIT TEE",
    price: 100,
    img: "img/men2.webp",
    des: "Comfortable baggy fit tee ideal for everyday use.",
  },
  {
    id: "ItemNO3",
    name: "Stretched Cropped Fit Denim",
    price: 450,
    img: "img/men5.webp",
    des: "Fashionable stretched cropped fit denim for a modern look.",
  },
  {
    id: "ItemNO4",
    name: "LOOSE CARGO FIT RELAXED TROUSER",
    price: 45,
    img: "img/men4.webp",
    des: "Relaxed fit loose cargo trousers for ultimate comfort.",
  },
  {
    id: "ItemNO5",
    name: "LOOSE CARGO FIT RELAXED TROUSER",
    price: 45,
    img: "img/men3.webp",
    des: "Comfortable and practical loose cargo fit relaxed trousers.",
  },
  {
    id: "ItemNO6",
    name: "CARGO TROUSER",
    price: 45,
    img: "img/men6.webp",
    des: "Durable and stylish cargo trousers for everyday wear.",
  },
  {
    id: "ItemNO7",
    name: "CAP",
    price: 45,
    img: "img/men7.webp",
    des: "Trendy cap to complete your outfit.",
  },
  {
    id: "ItemNO8",
    name: "CONTRAST SLEEVE PANEL POLO",
    price: 45,
    img: "img/men8.webp",
    des: "Stylish polo with contrast sleeve panels.",
  },
  {
    id: "ItemNO9",
    name: "MEN BELT",
    price: 45,
    img: "img/men9.webp",
    des: "High-quality belt to complement your attire.",
  },
  {
    id: "ItemNo10",
    name: "Dior",
    price: 40,
    img: "img/dior.webp",
    des: "Luxury Dior product for a sophisticated look.",
  },
  {
    id: "ItemNo11",
    name: "gucci",
    price: 40,
    img: "img/gucci.webp",
    des: "Elegant Gucci item to enhance your style.",
  },
  {
    id: "ItemNo12",
    name: "parada",
    price: 40,
    img: "img/parada1.webp",
    des: "Chic Prada product for a fashionable statement.",
  },
  {
    id: "ItemNo13",
    name: "versacee",
    price: 40,
    img: "img/versace.webp",
    des: "Versace piece that adds luxury to your wardrobe.",
  },
  {
    id: "ItemNo14",
    name: "Little boy",
    price: 40,
    img: "img/low-angle-little-boy-posing.webp",
    des: "Cute and comfortable outfit for little boys.",
  },
  {
    id: "ItemNo15",
    name: "Shorts Mordren",
    price: 40,
    img: "img/full-shot-modern-boy-with-skateboard.webp",
    des: "Modern shorts perfect for active kids.",
  },
  {
    id: "ItemNo16",
    name: "Sleeve less",
    price: 40,
    img: "img/Girls.webp",
    des: "Stylish sleeveless top for girls.",
  },
  {
    id: "ItemNo17",
    name: "Light Grey",
    price: 40,
    img: "img/girl-with-happy-expression.webp",
    des: "Light grey outfit for a trendy look.",
  },
  {
    id: "ItemNo18",
    name: "Mordren wear",
    price: 40,
    img: "img/little-girl-with-cosmetics-sitting-near-mirror_1.webp",
    des: "Modern wear for young girls.",
  },
];
