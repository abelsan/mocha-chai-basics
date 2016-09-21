var should 	= require('chai').should();
var name 	= 'peter parker';
var dairy	= { cheese : [ 'asiago', 'provolone', 'gorgonzola' ] };


describe('BDD', function() {
  describe('Basic Mocha Chai Test', function() {
    it('dummy setup - all test should pass', function() {


		name.should.be.a('string');
		name.should.equal('peter parker');
		name.should.have.length(12);
		dairy.should.have.property('cheese').with.length(3);


    });
  });
});


