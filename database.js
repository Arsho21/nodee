require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user.js');
const hbs = require('hbs');
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('inputs.hbs')
});

app.get('/users', async (req, res) => {
    try {
        // const users = await User.find({userName: 'Arsen'});
        // const users = await User.findById('644bb0784d8525598faa4e1c');
        const users = await User.findOne({userName: 'Arsen'});
        console.log(users);
        res.json(users)
    } catch (e) {
        res.status(404).json({ message: e.message });
    }
});

app.post('/new', async (req, res) => {
    try {
        if (req.body.married == 'on') {
            req.body.married = true
        } else {
            req.body.married = false
        }
        const user1 = new User(req.body)
        let user = await user1.save()
        console.log(user);
        res.redirect('/success')
    }catch(e){
        res.json({message: e.message})
    }
    
});


app.get('/success', (req, res) => {
    res.send('hello from Main page');
});




mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDb');
    app.listen(process.env.PORT, () => {
        console.log('Server is listening port 4000');
    });
});
