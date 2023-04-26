require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const user = require('./models/user.js')
const app = express();

const user1 = new user({
    userName: 'Arshak',
    age: '21',
    mother: 'Anjela',
    married: false,
    email: 'asdfgg@mail.ru',
    password: '1122'
});
console.log(user1);
user1.save()

mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});


mongoose.connection.once('open', ()=> {
    console.log('Connected to MongoDb');
    app.listen(process.env.PORT, ()=> {
        console.log('Server is listening port 4000');
    });
});

app.get('/', (req, res) => {
    res.send('hello from Main page');
});