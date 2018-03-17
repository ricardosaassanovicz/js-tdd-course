import { expect } from 'chai';
import { sum, sub, mult, div}  from '../src/calc.js';

describe('Calc', () => {

    describe('Smoke tests', () => {

        it('should exist the method `sum`', () => {
            expect(sum).to.exist;
            expect(sum).to.be.a('function');            
        });

        it('should exist the method `sub`', () => {
            expect(sub).to.exist;
            expect(sub).to.be.a('function');            
            
        });

        it('should exist the method `div`', () => {
            expect(div).to.exist;
            expect(div).to.be.a('function');            
            
        });

        it('should exist the method `mult`', () => {
            expect(mult).to.exist;            
            expect(mult).to.be.a('function');            
        });
    });

    describe('Soma', () => {

        it('should return 4 when `sum(2,2)`', () => {
            expect(sum(2,2)).to.be.equal(4);
        });

        it('should return 2 when `sub(4,2)`', () => {
            expect(sub(4,2)).to.be.equal(2);
        });

        it('should return "Não é possivel subtrair por zero!" when `sub(4,0)`', function(){
            expect(sub(4,0)).to.be.equal('Não é possivel subtrair por zero!');
        });

        it('should return 5 when `div(10,2)`', () => {
            expect(div(10,2)).to.be.equal(5);
        });

        it('should return 14 when `mult(2,7)`', () => {
            expect(mult(2,7)).to.be.equal(14);
        });

    });

});
