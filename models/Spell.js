const { Schema, model } = require('mongoose');

const spellSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please Pass In a Name']
  }
})

const Spell = model('Spell', spellSchema);
module.exports = Spell;
