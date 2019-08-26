// const dotenv = require('dotenv');
// const result = dotenv.config();

module.exports = {
    port: process.env.PORT,
    dbconnection: process.env.dbconnection
}

// const { parsed: env } = result;

// if (result.error) {
//     throw result.error;
// }

// module.exports = env;