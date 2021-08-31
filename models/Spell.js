const { Schema, model } = require('mongoose');
const spellLevels = require('../constants/spellLevels')
const schools = require('../constants/schools')

const spellSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please Pass In a Name']
  },

  description: {
    type: String,
    required: [true, 'Please Pass In a Description']
  },
  
  level: {
    type: Number,
    required: [true, 'Please Provide a Level Attribute'],
    enum: spellLevels
  },

  school: {
    type: String,
    required: [true, 'Please Provide a Spell School'],
    enum: schools
  },
  
  castingTime: {
    type: String,
    required: [true, 'Please Provide a Casting Time']
  },

  range: {
    type: String,
    required: [true, 'Please Provide A Range Value']
  }
})

const Spell = model('Spell', spellSchema);
module.exports = Spell;
