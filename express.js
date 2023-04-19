const express = require('express');
const app = express();
const hbs = require('hbs')
const{allFilms, film} = require('./controllers/film.js')

// console.log(filmControllers);
 
app.set('view engline', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

// app.get('/home', function (_, response) {
//     response.render('home.hbs', {
//         title: 'moi kontakt',
//         emailsVisible: true,
//         emails: ['sfvccs@mail.ru', 'reeqwf@,ail.ru'],
//         phone: '+374-77-77-77-71'
//     });
// });



app.get('/films',allFilms);

app.get('/films/:id',film);

app.get('/', function (_, response) {
    response.render('main.hbs');
});


app.listen(4000, (err) => {
    if (err) console.log(err);
    console.log(('work'));
});

// --------------params

// app.get('/', (req, res) => {
//     res.send('Main page')
// })

// app.get('/books', (req,res) => {
//     res.send('You can see the current book py thee path /book/1')
// })

// app.get('/book/:id', (request, response) => {
//     console.log(request.params);
//     response.send('id:' + request.params['id'])
// });

