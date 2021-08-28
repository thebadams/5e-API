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

        expect(newSpell).to.have.property('school');
        expect(newSpell.school).to.be.a('string');
        expect(newSpell.school).to.equal('Evocation');
      })
      it('Should Throw A Validation Error If No School Is Provided', function() {
        const badSpellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          schol: 'Evocation'
        }
        const newSpell = new Spell(badSpellInfo);

        newSpell.validate(function(error) {
          expect(error.errors.school).to.exist;
          expect(error.errors.school.message).to.equal('Please Provide a Spell School');
        })
      })
    })
    describe('Casting Time Attribute', function() {
      it('Should Return an Object With The Action Attribute', function() {
        const spellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          school: 'Evocation',
          castingTime: '1 Action'
        }

        const newSpell = new Spell(spellInfo);
        expect(newSpell).to.have.a.property('castingTime');
        expect(newSpell.castingTime).to.be.a('string');
        expect(newSpell.castingTime).to.equal('1 Action');
      })
      it('Should Throw A Validation Error If No Casting Time Is Provided', function() {
        const badSpellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          school: 'Evocation',
          castingtime: '1 Action'
        }

        const newSpell = new Spell(badSpellInfo);
        newSpell.validate(function(error) {
          expect(error.errors.castingTime).to.exist
          expect(error.errors.castingTime.message).to.equal('Please Provide a Casting Time')
        })
      })
    })
    describe('Range Attribute', function() {
      it('Should Return An Object With a Range Property', function() {
        const spellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          school: 'Evocation',
          castingTime: '1 Action',
          range: '60 Feet'
        }

        const newSpell = new Spell(spellInfo);
        expect(newSpell).to.have.property('range')
        expect(newSpell.range).to.be.a('string');
        expect(newSpell.range).to.equal('60 Feet')
      })
      it('Should Throw a Validation Error If No Range Is Passed', function() {
        const badSpellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          school: 'Evocation',
          castingTime: '1 Action',
          rnge: '60 Feet'
        }

        const newSpell = new Spell(badSpellInfo);

        newSpell.validate(function(error) {
          expect(error.errors.range).to.exist;
          expect(error.errors.range.message).to.equal('Please Provide A Range Value')
        })
      })
    })
  })
  
})