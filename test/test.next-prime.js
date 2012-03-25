var nextPrime = require('./../index').nextPrime
var asyncPrime = require('./../index').asyncPrime;

describe('prime', function() {

    before(function(){
        console.log('before');
    });

    after(function(){
        console.log('after');
    });

    beforeEach(function(){
        console.log('beforeEach');
    });

    afterEach(function(){
        console.log('afterEach');
    });

    describe('nextPrime', function() {
        before(function(){
            console.log('new before');
        });

        it('nextPrime should return the next prime number', function() {
            nextPrime(7).should.equal(11);
        });

        it('zero and one are not prime numbers', function() {
            nextPrime(0).should.equal(2);
            nextPrime(1).should.equal(2);
        });
    });

    describe('asyncPrime', function() {
        afterEach(function(){
            console.log('new afterEach');
        });

        it('asyncPrime should return the next prime number', function(done) {
            asyncPrime(128, function(n) {
                n.should.equal(131);
                done();
            });
        });
    });
});

