const Knex = require('knex');

/**
 * @type {Function}
 * @param {Knex} knex
 */

exports.up = async function (knex) {
	return knex.schema.createTable('submissions', function (table) {
		table.increments();
		table.timestamps(true, true);

		table.string('firstName').notNullable();
		table.string('lastName').notNullable();
		table.string('phone').notNullable();

		table.unique('phone');
	});
};

/**
 * @type {Function}
 * @param {Knex} knex
 */
exports.down = async function (knex) {
	return knex.schema.dropTable('submissions');
};
