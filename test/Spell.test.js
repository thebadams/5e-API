const Spell = require('../models/Spell');
const { expect } = require('chai');

describe('Spell Model', function() {
  it('Should Exist', function() {
    expect(Spell).to.exist
  })
})