const user = require('../models/user');

const CreateUSer = data => {
	const newUSer = new user(data);

	newUSer.save(function (err, user) {
		if (err) return console.error(err);
		console.log(user._id + " saved user");
	});
}

module.exports = { CreateUSer };