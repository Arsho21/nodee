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

app.get('/delete', async (req,res) => {
    try{
        // const result = await Kino.deleteOne({kinoName: 'Hulk'});
        // const result = await Kino.deleteOne({kinoName: 'Hulk'}); jnjum e bolory voroncanuny orinak hulk e
        // const result = await Kino.findOneAndDelete({kinoName: 'Black Panther'}); //veradardznum e jnjvac arjeqy ir masin bolor texekutyunov
        // const result = await Kino.findByIdAndDelete('644fa4428811888d83c0802f') //jnjum e id ov

        // ---- update
        const result = await Kino.updateMany({kinoName: 'black panther'}, {kinoName: 'Panther'})

        // const result = await Kino.updateOne({kinoName: 'Hulk'}, {kinoName: 'Hulkkk'})
        console.log(result);
        res.json(result);
    }catch (e){
        res.status(400).json({message: e.message});
    }
})

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