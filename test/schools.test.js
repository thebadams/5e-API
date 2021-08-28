const { expect } = require('chai');
const schools = require('../constants/schools');

describe('Schools Array', function() {
  it('Should Be An Array', function() {
    expect(schools).to.be.an('array');
  })
  it('Should Have All the Schools of Magic Within It', function() {
    expect(schools.length).to.equal(8)
    expect(schools).to.include('Abjuration')
    expect(schools).to.include('Conjuration')
    expect(schools).to.include('Divination')
    expect(schools).to.include('Enchantment')
    expect(schools).to.include('Evocation')
    expect(schools).to.include('Illusion')
    expect(schools).to.include('Necromancy')
    expect(schools).to.include('Transmutation')
  })
})