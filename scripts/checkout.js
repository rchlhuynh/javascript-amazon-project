import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js'
// import '../data/backend-practice.js';
// import {Car} from '../data/car.js';

async function loadPage() {
    await loadProductsFetch();

    const value = await new Promise((resolve) => {
        loadCart(() => {
            resolve('value3');
        })
    });

    renderOrderSummary();
    renderPaymentSummary()
}
loadPage()

/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        })
    })

]).then((value) => {
    console.log(value);
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1') //resolve waits for each step to finish before moving on
    });

}).then((value) => {
    console.log(value);
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        })
    });

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/
