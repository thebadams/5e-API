const Spell = require('../models/Spell');
const { Schema ,model} = require('mongoose');
const { expect } = require('chai');

describe('Spell Model', function() {
  it('Should Exist', function() {
    expect(Spell).to.exist
  })
  it('Should Return an Instance of Spell when used with new keyword', function() {
    const newSpell = new Spell();
    expect(newSpell).to.be.an.instanceOf(Spell)
    expect(newSpell).to.have.a.property('_id');
  })
  describe('Spell Instance Creation', function() {
    it('Should Return an object with a name attribute when created', function() {
    const newSpell = new Spell({name: 'Fireball'})
    expect(newSpell).to.be.an.instanceOf(Spell);
    expect(newSpell).to.have.a.property('name');
    expect(newSpell.name).to.be.a('string')
    expect(newSpell.name).to.equal('Fireball');
    })
    it('Should Throw An Error If No Name Is Provided', function() {
    const newSpell = new Spell({nam: 'Fireball'});
    newSpell.validate(function(error) {
      expect(error.errors.name).to.exist
      expect(error.errors.name.message).to.equal('Please Pass In a Name')
      })
    })
    it('Should Return an object with description attribute ', function() {
      const newSpell = new Spell({ name: 'Fireball', description: 'A Ball of Fire' })
      console.log(newSpell)
      expect(newSpell).to.have.a.property('description');
      expect(newSpell.description).to.be.a('string');
      expect(newSpell.description).to.equal('A Ball of Fire');
    })
  })
  
})