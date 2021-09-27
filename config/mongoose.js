const mongoose = require('mongoose')
require('dotenv').config()
let URI
if (process.env.NODE_ENV === 'development') {
 URI = process.env.DEVELOPMENT_MONGODB_URL;
} else {
  URI = process.env.TEST_MONGODB_URL
}

module.exports = URI;
