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
  })
})