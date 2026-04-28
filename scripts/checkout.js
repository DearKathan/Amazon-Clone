import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
// import '../data/cart-oop.js';
// import '../data/cart-class.js';
// import '../data/car.js';
// import '../data/backend-practice.js';
import {loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';

// new Promise((resolve) => {
//   console.log('Start Promise');
//   loadProducts(() => {
//     console.log('finished loading');
//     resolve();
//   });
// }).then(() => {
//   console.log('next step');
// })

// loadProducts(() => {
//   renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymentSummary();
// });

async function loadPage() {
  // console.log('load page');

  try {
    // throw 'Error1';
    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {

      // throw 'error2';

      loadCart(()=> {
        // reject('error3');
        resolve('value');
      });
    });

  } catch (error) {
    console.log('Unexpected Error. Please try again.');
  } 

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();

  // return 'value2';
}
loadPage();

// Promise.all([
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(()=> {
//       resolve();
//     });
//   })
// ]).then((values) => {
//   console.log(values);
//   renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve('value1');
//   });

// }).then((value) => {
//   console.log(value);
//   return new Promise((resolve) => {
//     loadCart(()=> {
//       resolve();
//     });
//   });

// }).then(() => {
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// loadProducts(() => {
//   loadCart(() => {
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
