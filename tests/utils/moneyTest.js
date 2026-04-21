import {formatCurrency} from '../../scripts/utils/money.js';
import {cart} from '../../data/cart.js';
//describe() creates a test suite in Jasmine
//adding tests by giving it a second parameter as function

//it() creates a test, give it a name
// the function is what inside the test

//expect() in Jasmine is the equipvalent of using if statements
//expect() compares a value to another
describe('test suite: formatCurrency', () => {
    it('convert cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
    });

    it('rounds up to the nearest cent', ()=> {
    expect(formatCurrency(2000.5)).toEqual('20.01');
    })

    xit('rounds down to the nearest cent', () => {
        expect(formatCurrency(2000.4)).toEqual('20.00');
    });

    xit('works with negative numbers', () => {
        expect(formatCurrency(-200)).toEqual('-2.00')
    })
});

xdescribe('test suite: localStorage,setItem', () => {
    it('check if code called cart', () => {
        spyOn(localStorage, 'setItem');

        localStorage.setItem('cart', '[]');
        
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', '[]')
    })
})