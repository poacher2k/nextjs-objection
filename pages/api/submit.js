import nc from 'next-connect';

import Submission from '../../lib/models/Submission';

const handler = nc();

handler.get(async (req, res) => {
	const submissions = await Submission.query();

	return res.json({
		ok: true,
		submissions,
	});
});

handler.post(async (req, res) => {
	const data = {
		firstName: 'Daniel',
		lastName: 'Skogly',
		phone: '97793446',
	};

	const newSubmission = await Submission.query().insertAndFetch(data);

	return res.json(newSubmission);
});

export default handler;
