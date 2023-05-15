const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const PORT = process.env.port || 3001;
const schema = require('./schema/schema')
const colors = require('colors');
const connectDB = require('./config/db')
const cors = require('cors')

const app = express();

connectDB()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(PORT, console.log(`server running on port ${PORT}`));