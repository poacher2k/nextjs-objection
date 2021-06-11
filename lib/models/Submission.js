import { Model } from 'objection';
import typeOf from 'just-typeof';

import { knex } from '../config/knex';

Model.knex(knex);

export default class Submission extends Model {
	static tableName = 'submissions';

	static jsonSchema = {
		type: 'object',
		required: ['firstName', 'lastName', 'phone'],

		properties: {
			id: { type: 'integer' },
			firstName: {
				type: 'string',
				minLength: 1,
				maxLength: 255,
			},
			lastName: {
				type: 'string',
				minLength: 1,
				maxLength: 255,
			},
			phone: {
				type: 'string',
				minLength: 8,
				maxLength: 8,
			},
		},
	};

	$formatJson(json) {
		json = super.$formatJson(json);

		const dateColumns = ['created_at', 'updated_at'];

		for (const dateColumn of dateColumns) {
			if (typeOf(json[dateColumn]) === 'date') {
				json[dateColumn] = json[dateColumn].toISOString();
			}
		}

		return json;
	}
}
