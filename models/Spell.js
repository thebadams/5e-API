const { Schema, model } = require('mongoose');

const spellSchema = new Schema({

})

const Spell = model('Spell', spellSchema);
module.exports = Spell;
