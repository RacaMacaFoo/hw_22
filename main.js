let kitchenProducts = [
  {
    type: "grater",
    price: 10
  },
  {
    type: "pastry-bag",
    price: 25
  },
  {
    type: "scale",
    price: 5
  },
  {
    type: "whisk",
    price: 15
  }
];

let devicesProducts = [
  {
    type: "desktop",
    price: [100, 1000]
  },
  {
    type: "laptop",
    price: [50, 1500]
  },
  {
    type: "smartphone",
    price: [80, 2000]
  },
  {
    type: "tablet",
    price: [20, 1300]
  }
];

let cosmeticsProducts = [
  {
    type: "blush",
    price: 100
  },
  {
    type: "eyeshadow",
    price: 50
  },
  {
    type: "lipstick",
    price: 80
  },
  {
    type: "nail-polish",
    price: 200
  },
  {
    type: "perfume",
    price: 300
  }
];

let Kitchen = { category: "kitchen" };
let Devices = { category: "devices" };
let Cosmetics = { category: "cosmetics" };

const createProto = (arr, proto) => {
  let shopProdArr = arr.map((product) => {
    let newProduct = Object.create(proto);
    for (let key in product) {
      newProduct[key] = product[key];
    }
    return newProduct;
  });
  return shopProdArr;
};

const fullShopArr = [
  createProto(kitchenProducts, Kitchen),
  createProto(devicesProducts, Devices),
  createProto(cosmeticsProducts, Cosmetics),
];

fullShopArr.forEach((arr) => {
  document.write(`
    <div class=category-holder>
    <h2>Category: ${arr[0].category}</h2>
    <div class=cards-holder>
    ${arr.map(
      (obj) =>
        `
        <div class=card>
            <div class=image-holder>
                <img src="img/${obj.category}/${obj.type}.svg" alt="${obj.type}">
            </div>
            <div class=description-holder>
            <p class="category__name">Name: <span>${obj.type}</span></p>
            <p class="category__price">Price: <span>$${
              Array.isArray(obj.price)
                ? `${obj.price[0]} - ${obj.price[1]}`
                : obj.price
            }</span></p>
            </div>
        </div>`).join("")}
    </div>
    </div>`);
});
