const dotenv = require('dotenv');
const path = require('path');

const root = path.join.bind(this, __dirname);
dotenv.config({ path: root('.env') });
module.exports = {
	PORT: process.env.PORT,
	MONGO_URL: process.env.MONGO_URL,
	SESSION_SECRET: process.env.SESSION_SECRET,
	IS_PRODUCTION: process.env.NODE_ENV,
	PER_PAGE: process.env.PER_PAGE,
};
