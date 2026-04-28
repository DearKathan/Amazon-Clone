import {isValidDeliveryOption} from '../../data/deliveryOptions.js';

function Cart(localStorageKey) {
  const cart = {
  cartItems : undefined,

  loadFromStorage: function() {
  this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
  if(!this.cartItems) {
      this.cartItems = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      },
      {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
      }]
    }
  },

  saveToStorage() {
  localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
  },

  addToCart(productId, productQuantity) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {

      if(productId === cartItem.productId) {
        matchingItem = cartItem;
      }

    });

    if(matchingItem) {
      matchingItem.quantity += Number(productQuantity);
    }
    
    else {
      this.cartItems.push(
      {
        productId,
        quantity: Number(productQuantity),
        deliveryOptionId: '1'
      });
    }

    const added = document.querySelector(`.js-added-to-cart-${productId}`);
    added.classList.add('added-to-cart-visible');

    setTimeout(() => {
      added.classList.remove('added-to-cart-visible');
    }, 2000);

    this.saveToStorage();
  },

  removeFromCart(productId) {
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if(cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;

    this.saveToStorage();
  },

  calculateCartQuantity: function(cart) {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
    
    return cartQuantity;
  },

  updateQuantity: function(productId, newQuantity) {
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
      if(cartItem.productId === productId) {
        matchingItem = cartItem;
      }
    });
    matchingItem.quantity = newQuantity;
    
    this.saveToStorage();
  },

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {

      if(productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if(!matchingItem) {
      return;
    }

    if(!isValidDeliveryOption(deliveryOptionId)) {
      return;
    }

    matchingItem.deliveryOptionId = deliveryOptionId;

    this.saveToStorage();
  }
  };

  return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();
console.log(cart);
// cart.addToCart('36c64692-677f-4f58-b5ec-0dc2cf109e27', 2);

businessCart.loadFromStorage();
console.log(businessCart);