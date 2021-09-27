/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
const { expect } = require('chai');
const mongoose = require('../config/mongoose');

describe('MongoDB URI', function () {
  it('Should Equal Environment Variable In Testing Envirionment', function () {
    expect(mongoose).to.equal(process.env.TEST_MONGODB_URL)
  })
}) 