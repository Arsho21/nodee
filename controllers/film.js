let films = [
    {
        id: 1,
        name: 'Spider-Man',
        url: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg',
    },
    {
        id: 2,
        name: 'Iron-Man',
        url: 'https://resizing.flixster.com/jTU4RAjnwcZAconup5QZkH2Emb8=/206x305/v2/https://flxt.tmsimg.com/assets/p170620_p_v8_az.jpg'
    },
    {
        id: 3,
        name: 'Hulk',
        url: 'https://resizing.flixster.com/odSWHNjwFp9h_Ls8gQ0Fr6LXqo4=/206x305/v2/https://flxt.tmsimg.com/assets/p176337_p_v8_am.jpg',
    }
]


module.exports.allFilms = (_, response) => {
    response.render('filmss.hbs',{
        films: films
    });
}

module.exports.film = (req, res) => {
    let film = films.find((item) => item.name == req.params.id);
    res.render('film.hbs', { film: film })
}