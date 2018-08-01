// Update with your config settings.

module.exports = {
    development: {
        client: "pg",
        connection: "postgres:///gmemory2"
    },

    production: {
        client: "pg",
        connection: process.env.DATABASE_URL
    }
};
