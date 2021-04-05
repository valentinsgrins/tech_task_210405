const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;
const host = process.env.HOST
const uri = process.env.MONGODB_HOST;

app.use(cors());
app.use(express.json());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

async function start() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(port, host, () => {
            console.log(`Server is running on host ${host} and port ${port}`);
        });
    } catch (e) {
        console.log('Error while starting server', e.message);
        process.exit(1);
    }
}

start();