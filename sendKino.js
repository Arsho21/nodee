require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Kino = require('./models/kino.js');
const hbs = require('hbs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'hbs')

app.get('/', async (req,res) => {
    try{
        const films = await Kino.find()
        console.log(films)
        res.render('kino.hbs',{
            films
        })
    }catch{
        res.send('No similar move found')
    }    
});


// app.get('/movies', async(req, res) => {
//     try{
//         let x = await Kino.find({ year: {$gt: 9}});

//         let x = await Kino.find({year: {$gte: 9}});

//         let x = await Kino.find({year: {$lte: 2018}, kinoName: 'Hulk'});

//          let x = await Kino.find({kinoName: {$in: ['Hulk', 'Iron Man']}});

//         let x = await Kino.find({$or: [{producer: 'flamingo'}, {producer: 'Кевин Файги'}]});

//         let x = await Kino.find({$or: [{producer: 'Йен Брюс'}, {year: 2015}]});

//         let x = await Kino.find({$and: [{producer: 'Йен Брюс'}, {year: 2}]});

//         let x = await Kino.find({producer: 'Йен Брюс', year: 2});

//         let x = await Kino.find({year: {$lt: 8}});
//         res.status(200).json(x);
//     }catch(e){
//         res.json({message: e.message});
//     }
    
// })

app.get('/delete', async (req,res) => {
    try{
        // const result = await Kino.deleteOne({kinoName: 'Hulk'});

        // const result = await Kino.deleteMany({kinoName: 'Hulk'}); jnjum e bolory voroncanuny orinak hulk e

        // const result = await Kino.findOneAndDelete({kinoName: 'Black Panther'}); //veradardznum e jnjvac arjeqy ir masin bolor texekutyunov

        const result = await Kino.findByIdAndDelete(req.params.id);
        res.status(200).json(result)
    }catch (e){
        res.status(400).json({message: e.message});
    }
});

app.post('/newKino', async (req, res) => {
    try{
        const kino1 = new Kino(req.body)
        await kino1.save()
        res.redirect('/')
    }catch{
        res.status(400).send('wrong')
    }    
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