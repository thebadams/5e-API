const spellLevels = require('../constants/spellLevels');
const { expect } = require('chai');

describe('Spell Levels Array', function() {
  it('Should Be An Array', function() {
    expect(spellLevels).to.be.an('array');
  })
  it('Should Only Have The Digits 1-9', function() {
    expect(spellLevels.length).to.equal(10);
    expect(spellLevels).to.include(0)
    expect(spellLevels).to.include(1)
    expect(spellLevels).to.include(2)
    expect(spellLevels).to.include(3)
    expect(spellLevels).to.include(4)
    expect(spellLevels).to.include(5)
    expect(spellLevels).to.include(6)
    expect(spellLevels).to.include(7)
    expect(spellLevels).to.include(8)
    expect(spellLevels).to.include(9)
  })
})