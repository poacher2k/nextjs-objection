const path = require('path');

const dotenvPath = path.resolve(process.cwd(), '.env.local');

require('dotenv').config({ path: dotenvPath });

const { config } = require('./lib/config/knex');

module.exports = config;
