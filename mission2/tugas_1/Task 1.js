let products = [
    {
      name: "Product 1",
      price: 12000,
      image: "nasgor.jpeg"
    },
    {
      name: "Product 2",
      price: 8000,
      image: "goreng.jpeg"
    },
    {
      name: "Product 3",
      price: 10000,
      image: "baso.jpeg"
    },
    {
        name: "Product 4",
        price: 5000,
        image: "esteh.jpeg"
    },
    {
        name: "Product 5",
        price: 8000,
        image: "esteh.jpeg"
    },
    {
        name: "Product 6",
        price: 12000,
        image: "esteh.jpeg"
    },
  ];

  let cart = {};

function addToCart(product) {
  if (cart[product.name]) {
    cart[product.name].quantity++;
  } else {
    cart[product.name] = {
      quantity: 1,
      price: product.price
    };
  }
}

function initializeProductDisplay() {
  products.forEach(function(product) {
    let productElements = document.querySelectorAll(".product");
    let productElement;
    
    for (let i = 0; i < productElements.length; i++) {
      if (productElements[i].querySelector("h2").textContent === product.name) {
        productElement = productElements[i];
        break;
      }
    }
    
    let itemAmountElement = document.createElement("span");
    itemAmountElement.classList.add("item-amount");
    itemAmountElement.textContent = "1";
  
    productElement.insertBefore(itemAmountElement, productElement.querySelector(".add-to-cart"));
  
    let priceElement = document.createElement("p");
    priceElement.textContent = `Price per item: Rp. ${product.price.toLocaleString()}`;
  
    productElement.insertBefore(priceElement, productElement.querySelector(".add-to-cart"));
  
    let imageElement = document.createElement("img");
    imageElement.src = product.image;
  
    productElement.insertBefore(imageElement, productElement.querySelector(".add-to-cart"));
  
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove-from-cart");
    removeButton.textContent = "-";
  
    productElement.insertBefore(removeButton, itemAmountElement);
  });
}


window.addEventListener("load", initializeProductDisplay);


  function removeFromCart(product) {
    if (cart[product.name]) {
      if (cart[product.name].quantity > 1) {
        cart[product.name].quantity--;
      } else {
        delete cart[product.name];
      }
    }
  }

  function calculateTotal() {
    let total = 0;
    
    for (let item in cart) {
      total += cart[item].quantity * cart[item].price;
    }
    
    return total;
  }

  let addToCartButtons = document.querySelectorAll(".add-to-cart");

  function updateCartDisplay() {
    let totalItems = 0;
    let totalPrice = 0;
    
    for (let item in cart) {
      totalItems += cart[item].quantity;
      totalPrice += cart[item].quantity * cart[item].price;
    }
    
    document.querySelector("#total-items").textContent = totalItems;
    document.querySelector("#total-price").textContent = totalPrice.toLocaleString();
  }

  addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Get the name of the product
      let productName = this.parentNode.querySelector("h2").textContent;
      
      // Add the product to the cart
      addToCart(products.find(product => product.name === productName));
      
      // Update the cart display
      updateCartDisplay();
    });
  });

  let removeFromCartButtons = document.querySelectorAll(".remove-from-cart");

  removeFromCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Get the name of the product
      let productName = this.parentNode.querySelector("h2").textContent;
      
      // Remove the product from the cart
      removeFromCart(products.find(product => product.name === productName));
      
      // Update the cart display
    updateCartDisplay();
});
});

