import {addToCart, cart, loadFromStorage,
    saveToStorage, removeFromCart
} from '../../data/cart.js';

describe('test suite: addToCart', () => {

    beforeEach(() => {
            spyOn(localStorage, 'setItem');
        })

    it('adds an existing product to the cart', () => {
        
    // load this cart as the starting cart
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);

        expect(localStorage.setItem).toHaveBeenCalledTimes(1);

        
        // increase the quantity when adds an existing product to the cart, every other things is the same
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);

        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2, 
        deliveryOptionId: '1'
        }]));
       
    });
    // assuming that cart length starts at 0 and then a product is added, it is 1
    it('adds a new product to the cart', () => {

        // spyOn creates a mock, takes the item you want to mock and the method in ''
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        
        // this method checks how many times localStorage.setItem has been called from the code above
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        
        
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
        
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
        }]));
    });
    
});

describe('test suite: removeFromCart', () => {
    beforeEach((() => {
        spyOn(localStorage, 'setItem');
    }))


    it('removes a productId that is in the cart', () => {
            spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();

        removeFromCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(0);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([]));
    })
    it('removes a productId that is not in the cart', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();

        removeFromCart('');
        expect(cart.length).toEqual(1);

        expect(localStorage.setItem).toHaveBeenCalledTimes(1);

        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);

        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1, 
        deliveryOptionId: '1'
        }]));
    })
        })