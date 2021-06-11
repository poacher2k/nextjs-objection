const Knex = require('knex');

const config = {
	client: 'pg',
	connection: process.env.DATABASE_URL,
};

const knex = Knex(config);

module.exports = {
	config,
	knex,
};
