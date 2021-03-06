'use strict';
require('dotenv').config();
module.exports = {
    app: {
        name: "JobsService",
        baseUrl: `http://localhost:`,
        port: process.env.PORT || 3000
    },
    api: {
        prefix: '^/api/v[1-9]',
        version: [1],
    },
    database: {
        url: process.env.DB_URL || "mongodb+srv://rankup:rank1998@cluster0-9enme.mongodb.net/RUJobs?retryWrites=true&w=majority",
    }
};
