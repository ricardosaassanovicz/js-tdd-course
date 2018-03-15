// rodar com --bail serve para parar no primeiro FAIL
var expect = require('chai').expect;

describe('Main 1', function(){

    describe('Method 1', function(){
        context('Case 1', function(){
            it.skip('test the function skip', function(){                
                throw new Error('Fail!!')
            });
        });

        context('Case 2', function(){
            //it.only('Teste funcao only do mocha', function(){              
            //});
        });
    });
});

describe('Main 2', function(){

    var arr;

    // roda uma vez, antes de tudo.
    before(function(){
        
    });

    after(function(){
        
    });

    beforeEach(function(){
        arr = [1,2,3];
    });

    afterEach(function(){
        
    });


    //smoke test
    it('should br an array', function(){
        expect(arr).to.be.a('array');
    });

    it('should have a size of 4 when push another value to the array', function(){
        arr.push(4);
        expect(arr).to.have.lengthOf(4)
    });

    it('should remove the value 3 when use pop in the array', function(){
        arr.pop(3);
        expect(arr).to.not.include(3);
    });

    it('should return true when pop 3 from the array', function(){
        expect(arr.pop(3) === 3).to.be.true;
    });

});

