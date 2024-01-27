'use strict';

const mongoose = require('mongoose');
// const {
// 	db: { host, name, port },
// } = require('../configs/config.mongodb');
const connectString = process.env.MONGO_URI;

console.log(connectString);

// const { countConnect } = require('../helpers/check.connect');

class Database {
	constructor() {
		this.connect();
	}

	//connect
	connect(type = 'mongodb') {
		if (1 === 1) {
			mongoose.set('debug', true);
			mongoose.set('debug', { color: true });
		}

		mongoose
			.connect(connectString, {
				maxPoolSize: 100,
			})
			.then((_) => console.log(`Connect mongodb success`))
			.catch((err) => console.error(`Error connect`));
	}

	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}

		return Database.instance;
	}
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
