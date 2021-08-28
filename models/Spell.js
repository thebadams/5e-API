const { Schema, model } = require('mongoose');

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
    required: [true, 'Please Provide a Level Attribute']
  },

  school: {
    type: String,
    required: [true, 'Please Provide a Spell School']
  },
  
  castingTime: {
    type: String,
    required: [true, 'Please Provide a Casting Time']
  }
})

const Spell = model('Spell', spellSchema);
module.exports = Spell;
