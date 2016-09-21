var should 	= require('chai').should();
var name 	= 'peter parker';
var dairy	= { cheese : [ 'asiago', 'provolone', 'gorgonzola' ] };


describe('BDD', function() {
  describe('First Name and Last Name', function() {
    it('Test for String', function() {

		name.should.be.a('string');

    });
  });
});


describe('BDD', function() {
  describe('First Name and Last Name', function() {
    it('Test for Peter Parker', function() {

		name.should.equal('peter parker');

    });
  });
});

describe('BDD', function() {
  describe('First Name and Last Name', function() {
    it('Test for Length of 10', function() {

		name.should.have.length(10);

    });
  });
});

describe('BDD', function() {
  describe('Types of Cheese', function() {
    it('Test for Length of 3', function() {

		dairy.should.have.property('cheese').with.length(3);

    });
  });
});
