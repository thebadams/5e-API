const { Schema, model } = require('mongoose');

const spellSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please Pass In a Name']
  },

  description: {
    type: String,
    required: [true, 'Please Pass In a Description'] 
  }
})

const Spell = model('Spell', spellSchema);
module.exports = Spell;
