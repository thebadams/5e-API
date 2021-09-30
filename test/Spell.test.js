/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
const { expect } = require('chai');
const Spell = require('../models/Spell');

describe('Spell Model', function () {
  it('Should Exist', function () {
    // eslint-disable-next-line no-unused-expressions
    expect(Spell).to.exist;
  });
  it('Should Return an Instance of Spell when used with new keyword', function () {
    const newSpell = new Spell();
    expect(newSpell).to.be.an.instanceOf(Spell);
    expect(newSpell).to.have.a.property('_id');
  });
  describe('Spell Instance Creation', function () {
    describe('Name Attribute', function () {
      it('Should Return an object with a name attribute when created', function () {
        const newSpell = new Spell({ name: 'Fireball' });
        expect(newSpell).to.be.an.instanceOf(Spell);
        expect(newSpell).to.have.a.property('name');
        expect(newSpell.name).to.be.a('string');
        expect(newSpell.name).to.equal('Fireball');
      });
      it('Should Throw An Error If No Name Is Provided', function () {
        const newSpell = new Spell({ nam: 'Fireball' });
        newSpell.validate(function (error) {
          expect(error.errors.name).to.exist;
          expect(error.errors.name.message).to.equal('Please Pass In a Name');
        });
      });
    });
    describe('Description Attribute', function () {
      it('Should Return an object with description attribute ', function () {
        const newSpell = new Spell({ name: 'Fireball', description: 'A Ball of Fire' });
        expect(newSpell).to.have.a.property('description');
        expect(newSpell.description).to.be.a('string');
        expect(newSpell.description).to.equal('A Ball of Fire');
      });
      it('Should Throw a Validation Error If No Description is Provided', function () {
        const newSpell = new Spell({ name: 'Fireball', descr: 'A Ball of Fire' });

        newSpell.validate(function (error) {
          expect(error.errors.description).to.exist;
          expect(error.errors.description.message).to.equal('Please Pass In a Description');
        });
      });
    });
    describe('Level Attribute', function () {
      it('Should Return an object with a level attribute', function () {
        const newSpell = new Spell({ name: 'Fireball', description: 'A Ball of Fire', level: 3 });
        expect(newSpell).to.have.a.property('level');
        expect(newSpell.level).to.be.a('number');
        expect(newSpell.level).to.equal(3);
      });
      it('Should Throw a Validation Error If No Level Is Provided', function () {
        const newSpell = new Spell({ name: 'Fireball', description: 'A Ball of Fire', lvl: 3 });

        newSpell.validate(function (error) {
          expect(error.errors.level).to.exist;
          expect(error.errors.level.message).to.equal('Please Provide a Level Attribute');
        });
      });
      it('Should Throw a Validation Error If Invalid Level is Provided', function () {
        const newSpell = new Spell({
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 11,
        });

        newSpell.validate(function (error) {
          expect(error.errors.level).to.exist;
          expect(error.errors.level.kind).to.equal('enum');
        });
      });
    });
    describe('School Attribute', function () {
      it('Should Return an Object with a School Attribute', function () {
        const spellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          school: 'Evocation',
        };
        const newSpell = new Spell(spellInfo);

        expect(newSpell).to.have.property('school');
        expect(newSpell.school).to.be.a('string');
        expect(newSpell.school).to.equal('Evocation');
      });
      it('Should Throw A Validation Error If No School Is Provided', function () {
        const badSpellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          schol: 'Evocation',
        };
        const newSpell = new Spell(badSpellInfo);

        newSpell.validate(function (error) {
          expect(error.errors.school).to.exist;
          expect(error.errors.school.message).to.equal('Please Provide a Spell School');
        });
      });
      it('Should Throw A Validation Error If Invalid School Is Provided', function () {
        const badSpellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          school: 'Evoction',
        };

        const newSpell = new Spell(badSpellInfo);
        newSpell.validate(function (error) {
          expect(error.errors.school).to.exist;
          expect(error.errors.school.kind).to.equal('enum');
        });
      });
    });
    describe('Casting Time Attribute', function () {
      it('Should Return an Object With The Action Attribute', function () {
        const spellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          school: 'Evocation',
          castingTime: '1 Action',
        };

        const newSpell = new Spell(spellInfo);
        expect(newSpell).to.have.a.property('castingTime');
        expect(newSpell.castingTime).to.be.a('string');
        expect(newSpell.castingTime).to.equal('1 Action');
      });
      it('Should Throw A Validation Error If No Casting Time Is Provided', function () {
        const badSpellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          school: 'Evocation',
          castingtime: '1 Action',
        };

        const newSpell = new Spell(badSpellInfo);
        newSpell.validate(function (error) {
          expect(error.errors.castingTime).to.exist;
          expect(error.errors.castingTime.message).to.equal('Please Provide a Casting Time');
        });
      });
    });
    describe('Range Attribute', function () {
      it('Should Return An Object With a Range Property', function () {
        const spellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          school: 'Evocation',
          castingTime: '1 Action',
          range: '60 Feet',
        };

        const newSpell = new Spell(spellInfo);
        expect(newSpell).to.have.property('range');
        expect(newSpell.range).to.be.a('string');
        expect(newSpell.range).to.equal('60 Feet');
      });
      it('Should Throw a Validation Error If No Range Is Passed', function () {
        const badSpellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          school: 'Evocation',
          castingTime: '1 Action',
          rnge: '60 Feet',
        };

        const newSpell = new Spell(badSpellInfo);

        newSpell.validate(function (error) {
          expect(error.errors.range).to.exist;
          expect(error.errors.range.message).to.equal('Please Provide A Range Value');
        });
      });
    });
    describe('Materials Attribute', function () {
      it('Should Return An Object With the Materials Property', function () {
        const components = {
          v: true,
          s: true,
          m: {
            materials: 'A tiny ball of bat guano and sulfur',
          },
        };
        const spellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          school: 'Evocation',
          castingTime: '1 Action',
          range: '150 feet',
          components,
        };

        const newSpell = new Spell(spellInfo);

        expect(newSpell).to.have.a.property('components');
        expect(newSpell.components).to.be.an('object');
        expect(newSpell.components).to.have.a.property('v');
        expect(newSpell.components).to.have.a.property('s');
        expect(newSpell.components).to.have.a.property('m');
        expect(newSpell.components.v).to.be.a('boolean');
        expect(newSpell.components.s).to.be.a('boolean');
        expect(newSpell.components.m).to.be.an('object').with.a.property('materials');
        expect(newSpell.components.m.materials).to.be.a('string');
        expect(newSpell.components.m.materials).to.equal('A tiny ball of bat guano and sulfur');
      });
      it('Should Throw A Validation Error If No Components Are Provided', function () {
        const badSpellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          school: 'Evocation',
          castingTime: '1 Action',
          range: '150 Feet',
          compnents: {

          },
        };

        const newSpell = new Spell(badSpellInfo);
        newSpell.validate(function (error) {
          expect(error.errors.components).to.exist;
          expect(error.errors.components.message).to.equal('Please Provide Components For The Spell');
        });
      });
    });
    describe('Duration Attribute', function () {
      it('Should Return An Object With A Duration Property', function () {
        const spellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          castingTime: '1 Action',
          range: '60 Feet',
          components: {
          v: true,
          s: true,
          m: {
            materials: 'A tiny ball of bat guano and sulfur',
          },
        },
         duration: 'Instantaneous'
      }

      const newSpell = new Spell(spellInfo);
      expect(newSpell).to.have.property('duration')
      expect(newSpell.duration).to.be.a('string')
      expect(newSpell.duration).to.equal('Instantaneous')
      })
      it('Should Throw a Validation Error If No Duration is Passed In', function () {
       const components = {
          v: true,
          s: true,
          m: {
            materials: 'Stuff'
          }
        }

      const badSpellInfo = {
        name: 'Fireball',
        description: 'A Ball of Fire',
        level: 3,
        school: 'Evocation',
        castingTime: '1 Action',
        range: '60 Feet',
        components,
        durtiuon: 'Instantaneous'
      }

      const newSpell = new Spell(badSpellInfo);
      newSpell.validate(function(error) {
        expect(error.errors.duration).to.exist
        expect(error.errors.duration.message).to.equal('Please Provide a Duration For the Spell')
      })
      })
    });
    describe('Higher Levels Attribute', function () {
      it('Should Return an Object With the Higher Levels property', function () {
        const components = {
          v: true,
          s: true,
          m: {
            materials: 'A tiny ball of bat guano and sulfur',
          },
        };

        const spellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          school: 'Evocation',
          castingTime: '1 Action',
          range: '150 Feet',
          components,
          duration: 'Instantaneous',
          higherLevels: 'At Higher Levels, Do Extra Damage',
        };

        const newSpell = new Spell(spellInfo);
        expect(newSpell).to.have.property('higherLevels');
        expect(newSpell.higherLevels).to.be.a('string')
        expect(newSpell.higherLevels).to.equal('At Higher Levels, Do Extra Damage');
      });
    });
    describe('Sources Attribute', function () {
      it('Should Return an Object With a Sources Property', function () {
         const components = {
          v: true,
          s: true,
          m: {
            materials: 'A tiny ball of bat guano and sulfur',
          },
        };

        const spellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          school: 'Evocation',
          castingTime: '1 Action',
          range: '150 Feet',
          components,
          duration: 'Instantaneous',
          higherLevels: 'At Higher Levels, Do Extra Damage',
          sources: ['SRD']
        };

        const newSpell = new Spell(spellInfo);
        expect(newSpell).to.have.a.property('sources')
        expect(newSpell.sources).to.be.an('array').with.length.greaterThanOrEqual(1);
        expect(newSpell.sources[0]).to.equal('SRD');
      });
      // it('Should Throw a Validation Error if A Source Array is Not Provided', function () {
      //   const badSpellInfo = {
      //     name: 'Fireball',
      //     description: 'A Ball of Fire',
      //     level: 3,
      //     school: 'Evocation',
      //     castingTime: '1 Action',
      //     range: '150 Feet',
      //     components: {
      //       v: true,
      //       s: true,
      //       m: {
      //         materials: 'Bat Guano'
      //       },
           
      //     },
      //     durtion: 'Instantaneous',
      //     higherLevels: 'At Higher Levels',
      //     source: ['SRD']
      //   }
      //   const newSpell = new Spell(badSpellInfo);
      //   newSpell.validate(function (error) {
      //     console.log(error)
      //     expect(error.errors.sources).to.exist;
      //     expect(error.errors.components.message).to.equal('Pleae Provide At Least 1 Source');
      //   });
      // })
    })
    describe('Concentration Attribute', function () {
      it('Should Return an Object With a Concentration Attribute That is a Boolean', function () {
                 const components = {
          v: true,
          s: true,
          m: {
            materials: 'A tiny ball of bat guano and sulfur',
          },
        };

        const spellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          school: 'Evocation',
          castingTime: '1 Action',
          range: '150 Feet',
          components,
          duration: 'Instantaneous',
          higherLevels: 'At Higher Levels, Do Extra Damage',
          sources: ['SRD'],
          concentration: false
        };

        const newSpell = new Spell(spellInfo);

        expect(newSpell).to.have.property('concentration')
        expect(newSpell.concentration).to.be.a('boolean')
        expect(newSpell.concentration).to.equal(false);
      })
      it('Should Throw a Validation Error If No Concentration Value Is Provided', function () {
                 const components = {
          v: true,
          s: true,
          m: {
            materials: 'A tiny ball of bat guano and sulfur',
          },
        };

        const spellInfo = {
          name: 'Fireball',
          description: 'A Ball of Fire',
          level: 3,
          school: 'Evocation',
          castingTime: '1 Action',
          range: '150 Feet',
          components,
          duration: 'Instantaneous',
          higherLevels: 'At Higher Levels, Do Extra Damage',
          sources: ['SRD']
        };

        const newSpell = new Spell(spellInfo);
        newSpell.validate(function(error) {
          expect(error.errors.concentration).to.exist;
          expect(error.errors.concentration.message).to.equal('Please Provide a Concentration True Or False Value');
        })
      })
    })
  });
});
