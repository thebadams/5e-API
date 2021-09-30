const acidSplash = {
  name: 'Acid Splash',
  school: 'Conjuration',
  range: '60 Feet',
  componenents: {
    v: true,
    s: true,
  },
  level: 0,
  duration: 'Instantaneous',
  description: 'You hurl a bubble of acid. Choose one creature you can see within range, or choose two creatures you can see within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.',
  higherLevels: 'When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.',
  castingTime: '1 Action',
  sources: ['SRD', 'PHB 211']
}

const bane = {
  name: 'Bane',
  school: 'Enchantment',
  level: 1,
  castingTime: '1 Action',
  range: '30 Feet',
  componenents: {
    v: true,
    s: true,
    m: {
      materials: 'A Drop of Blood'
    }
  },
  description: 'Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.',
  higherLevels: 'When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.',
  sources: ['SRD', 'PHB 216']

}