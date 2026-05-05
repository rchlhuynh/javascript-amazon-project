import {renderOrderSummary} from '../../scripts/checkout/orderSummary.js';
import {loadFromStorage, cart} from '../../data/cart.js';
import {loadProducts, loadProductsFetch} from '../../data/products.js';
describe('test suite: renderOrderSummary', () => {
    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

    beforeAll((done) => {
        loadProductsFetch().then(() => {
            done();
        });
        (() => {
            done();
        });
    });

//beforeEach hook will run this function before each of the tests
    beforeEach(() => {
        spyOn(localStorage, 'setItem');

        document.querySelector('.js-test-container').innerHTML = `
        <div class="js-order-summary"></div>
        <div class="js-payment-summary"></div>
        `;

    spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
        productId: productId1,
        quantity: 2, 
        deliveryOptionId: '1'
    }, {
        productId: productId2,
        quantity: 1,
        deliveryOptionId: '2'
    }]);
        });
        loadFromStorage();

        renderOrderSummary();

    });
    //afterEach is useful for cleaning up codes
    afterEach(() => {
//instead of showing the test result at the bottom, we will remove all the html after the tests are done
        document.querySelector('.js-test-container').innerHTML = '';
    })
    it('displays the cart', () => {
        expect(
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(2);
        expect(
            //.toContain method checks if this element contains this string Quantity: 2
            document.querySelector(`.js-product-quantity-${productId1}`).innerText
        ).toContain('Quantity: 2')
        expect(
            document.querySelector(`.js-product-quantity-${productId2}`).innerText
        ).toContain('Quantity: 1');

        expect(document.querySelector(`.js-product-name-${productId1}`).innerText)
        .toEqual('Black and Gray Athletic Cotton Socks - 6 Pairs');

        expect(document.querySelector(`.js-product-name-${productId2}`).innerText)
        .toEqual('Intermediate Size Basketball')
    });

    it('removes a product', () => {
        
        document.querySelector(`.js-delete-link-${productId1}`).click();
        expect(
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(1);
        // null means this item is not on the page or exist, it returns null when it cant find the element
        expect(
            document.querySelector(`.js-cart-item-container-${productId1}`)
        ).toEqual(null);
        //.not checks the opposite of null which is does exist
        expect(
            document.querySelector(`.js-cart-item-container-${productId2}`)
        ).not.toEqual(null);

        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual(productId2);

    });

});