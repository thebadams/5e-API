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
   describe('Name Attribute', function() {
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
   })
    describe('Description Attribute', function() {
      it('Should Return an object with description attribute ', function() {
        const newSpell = new Spell({ name: 'Fireball', description: 'A Ball of Fire' });
        expect(newSpell).to.have.a.property('description');
        expect(newSpell.description).to.be.a('string');
        expect(newSpell.description).to.equal('A Ball of Fire');
      })
      it('Should Throw a Validation Error If No Description is Provided', function() {
        const newSpell = new Spell({name: 'Fireball', descr: 'A Ball of Fire'});

        newSpell.validate(function(error) {
          expect(error.errors.description).to.exist;
          expect(error.errors.description.message).to.equal('Please Pass In a Description')
        })
      })
    })
    describe('Level Attribute', function() {
      it('Should Return an object with a level attribute', function() {
        const newSpell = new Spell({ name: 'Fireball', description: 'A Ball of Fire', level: 3 })
        expect(newSpell).to.have.a.property('level');
        expect(newSpell.level).to.be.a('number');
        expect(newSpell.level).to.equal(3)
      })
      it('Should Throw a Validation Error If No Level Is Provided', function() {
        const newSpell = new Spell({ name: 'Fireball', description: 'A Ball of Fire', lvl: 3})

        newSpell.validate(function(error) {
          expect(error.errors.level).to.exist;
          expect(error.errors.level.message).to.equal('Please Provide a Level Attribute');
        })
      })
    })
    describe('School Attribute', function() {
      it('Should Return an Object with a School Attribute', function() {
        const spellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          school: 'Evocation'
        }
        const newSpell = new Spell(spellInfo);

        expect(newSpell).to.have.property('school')
      })
    })
  })
  
})