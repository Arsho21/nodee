const path = require('path')

// console.log(path.extname(__dirname));
// console.log(path.extname(__filename));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute('./index.js'));


// console.log(path.join('folder1', 'folder2', 'index.html'));
// console.log(path.join('/folder1', 'folder2', 'index.html'));
// console.log(path.join('folder1', '//folder2', 'index.html'));
// console.log(path.join('folder1', '//folder2', '../index.html'));
// console.log(path.join(__dirname, 'data.js'));


// console.log(path.resolve('folder1', 'folder2', 'index.html'));
// console.log(path.resolve('/folder1', 'folder2', 'index.html'));
// console.log(path.resolve('folder1', '//folder2', 'index.html'));
// console.log(path.resolve('folder1', 'folder2', '../index.html'));
// console.log(path.resolve(__dirname, 'data.js'));


// console.log(path.normalize('/srv//app///app.js'));


// -----------------------fs-----------

// const fs = require('fs')

// fs.readFile('./text.txt', 'utf8', (err, data)=> {
//     console.log(data);
//     // console.log(data.toString());
// })

// console.log('this is working');


// fs.writeFile('./text.txt', 'hi from js file', (err)=> {
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Success');
//     }
// })


// fs.appendFileSync('text.txt', 'privet mi mi mi');

// fs.appendFile("text.txt", 'privet mi mi mi', (error) => {
//     if (error) console.log(error);

//     console.log(('zapis faila zavershena sofer. failov'));
//     let data = fs.readFileSync('text.txt', 'utf8');
// });


// --------buffer & strim--------

// let i = 0
// const readStream = fs.createReadStream('./big.txt', 'utf-8');
// readStream.on('data', function(chunk) {
//     console.log(chunk);
//     i++
//     console.log('-------' + i + '-------');
// });


// const readStream = fs.createReadStream('./big.txt');
// const writeStream = fs.createWriteStream('./new-big.txt');
// readStream.on('data', (chunk) => {
//     writeStream.write('\n----------chunk start-----------\n');
//     writeStream.write(chunk);
//     writeStream.write('\n----------chunk end-----------');
// });

// poxarinox | 
// readStream.pipe(writeStream);

// writeStream.write('privet mir \n');
// writeStream.write('prodoljenie zapisi \n');
// writeStream.end('zavershenie zapisi');


// ---------http---------

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('server created');
// console.log(req, res);
// console.log(req.url);
// console.log(req.method);
// console.log(req.headers);
// ------------------
// res.statusCode=200
// res.statusMessage='barev hayer'
// res.setHeader('user', 12)
// --------------------------
// res.setHeader('Content-Type', 'text/html')
// if(req.url==='/'){
//     res.write('Hii!')
// }else if(req.url === '/user'){
//     res.write('<h1>user page</h1>')
// }else{
//     res.statusCode=404
//     res.write('<h1>not found 404</h1>')

// }

// res.write('<h2>hello</h2>')
// res.write('<h1>bye</h1>')   


// res.setHeader('Content-Type', 'application/json');
// const data = JSON.stringify([
//     { name: 'Tony', age: 35 },
//     { name: 'Arthur', age: 40 },
// ]);

// -----

//     res.setHeader('Content-Type', 'application/json');
//     const data = JSON.stringify([
//         { method: req.method, url: req.url },
//     ]);
//     res.end(data);
// })


// server.listen(4000, 'localhost', (err) => {
//     err ? console.log(err) : console.log('listening port 4000');
// })



// --------express-------

// const express = require('express');
// const app = express();


// app.use(express.static(__dirname + '/static'));

// app.get('/',  (request, response) => {
//     response.send('<h2>privet express!</h2>');
//     // response.send([1, 2, 3]);
//     // response.send({x:1, y:2});
// });


// app.get('/user',  (request, response) => {
//     response.status(200);
//     response.sendFile(__dirname+ '/public/index.html'); 
// });


// // eror page 1

// // app.get('*', (req,res) => {
// //     res.status(404).sendFile(__dirname + /public/404.html')
// // });

// // error page 2

// app.use((req,res) => {
//     res.status(404).sendFile(__dirname + '/public/404.html')
// })



// app.listen(4000, (err) => {
//     if(err) console.log(err);
//     console.log('server is runing on port 4000');
// });



// const express = require('express');
// const app = express();

// app.use(express.static(__dirname + '/static'))

// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/public/index.html')
// })

// app.listen(4000, (err) => {
//     if(err) console.log(err);
//     console.log(('good'));
// })



// ----express----Midwleware------


// const express = require('express');
// const app = express();


// app.use((request, response, next) => {
//     fs.readFile('./number.txt', 'utf-8', (err, data) => {
//         console.log(data);
//         fs.writeFile('./number.txt', String(+data + 1), () => {  next();})
//     })



// });

// app.get('/', (req, res) => {
//     res.status(200).sendFile(__dirname + '/public/index.html')
// });


// app.listen(4000, (err) => {
//     if (err) console.log(err);
//     console.log(('work'));
// })



// -----express---redirect------

// app.get('/', (req,res) => {
//     console.log(req.query);
//     res.send('hello from / page')
// })

// app.get('/about/:id', (req, res) => {
//     console.log(req.params['id']);
//     res.redirect('/')   
// })




// --------express post------

// app.use(express.urlencoded());

// app.get('/', (req,res) => {
//     res.sendFile(__dirname + '/public/index.html')
// })

// app.post('/sub', (req,res) => {
//     console.log(req.body);
//     console.log(req.body.userName);
//     if(req.body.userName === ''){
//         return res.status(400).send('Wrong form')
//     }

//     res.send('Data Posted');

//     res.redirect('/');
// })




// --------express json----------------

const express = require('express');
const app = express();
app.use(express.json());

// // -----cors---
const cors  = require('cors')
app.use(cors())


// app.post('/user', (request, response) => {
//     console.log(request.body);
//     if (!request.body) return response.sendStatus(400);

//     response.json(request.body);
// });
let item = ([
        {
            id: 1,
            rl: 'https://i.guim.co.uk/img/media/d5b563bef60c06a22dc65a18c391f63ff42549e6/0_205_4288_2573/master/4288.jpg?width=1200&quality=85&auto=format&fit=max&s=f69dafe4bb0bc828c5e07298240f1d3a'
        },
        {
            id: 2,
            url: 'https://image.shutterstock.com/image-photo/cosmos-flowers-beautiful-garden-260nw-1569283954.jpg'
        },
        {
            id: 3,
            rl: 'https://i.pinimg.com/474x/12/d2/30/12d230fab7f17bda80a6b1d9899e7b93.jpg'
        },
        {
            id: 4,
            rl: 'https://i.pinimg.com/474x/12/d2/30/12d230fab7f17bda80a6b1d9899e7b93.jpg'
        },
        {
            id: 5,
            rl: 'https://i.pinimg.com/474x/df/f6/3c/dff63cfe150341f00837941cd15a9a7d--memes.jpg'
        },
        {
            id: 6,
            rl: 'https://media.cnn.com/api/v1/images/stellar/prod/210316134609-01-wisdom-project-spring.jpg?q=w_4000,h_2250,x_0,y_0,c_fill'
        },
        {
            id: 7,
            rl: 'https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png'
        },
        {
            id: 8,
            rl: 'https://www.kindpng.com/picc/m/81-816202_blue-star-sparkle-png-transparent-png.png'
        },
        {
            id: 9,
            rl: 'https://www.creativefabrica.com/wp-content/uploads/2021/09/30/Yellow-sparkles-symbols-vector-The-set-Graphics-18095496-1-580x387.jpg'
        },
        {
            id: 10,
            rl: 'https://www.creativefabrica.com/wp-content/uploads/2021/09/30/Yellow-sparkles-symbols-vector-The-set-Graphics-18095496-1-580x387.jpg'
        },
        {
            id: 11,
            rl: 'https://image.pngaaa.com/145/727145-middle.png'
        },
        {
            id: 12,
            l: 'https://cdn.shopify.com/s/files/1/0423/2629/4692/products/Y2KDELUXECOVERCHROME_2048x.png?v=1650898588'
        },
        {
            id: 13,
            rl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOG2Ju3tVhqeH-kdmywErOKFAyhDQmSmGkMmV7P6iD5jP3g5nXlVSw0s80nSLlWpAG-c&usqp=CAU'
        },
        {
            id: 14,
            rl: 'https://png.pngitem.com/pimgs/s/118-1187152_transparent-glowing-star-clipart-blue-transparent-background-stars.png'
        },
        {
            id: 15,
            rl: 'https://png.pngitem.com/pimgs/s/625-6250367_fanmade-cutie-mark-stars-by-durpy-dallas-stars.png'
        },
        {
            id: 16,
            rl: 'https://p.kindpng.com/picc/s/116-1168531_star-red-star-five-pointed-png-free-photo.png'
        },
        {
            id: 17,
            rl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbGUMZ7DMeY5h864tz9euU3ibOZSbHdISvA&usqp=CAU'
        },
        {
            id: 18,
            rl: 'https://i.pinimg.com/736x/d8/bd/e4/d8bde4e31993a1094865e07f17d0aa91.jpg'
        },
        {
            id: 19,
            rl: 'https://dejpknyizje2n.cloudfront.net/marketplace/products/super-star-text-y2k-aesthetic-sticker-36806-9b25dc.png'
        },
        {
            id: 20,
            rl: 'https://i.etsystatic.com/17330034/r/il/0df12c/2424157158/il_570xN.2424157158_gm5e.jpg'
        },
        {
            id: 21,
            rl: 'https://i.pinimg.com/originals/62/32/c0/6232c0297b746b4c4029f814e6c2d779.png'
        },
        {
            id: 22,
            rl: 'https://icon2.cleanpng.com/20180318/gyq/kisspng-star-yellow-clip-art-rising-star-cliparts-5aadec4cd3b379.3465608815213476608671.jpg'
        },
        {
            id: 23,
            rl: 'https://www.vhv.rs/dpng/d/361-3617406_totally-spies-gadgets-compowder-compoudrier-totally-spies-hd.png'
        },
        {
            id: 24,
            rl: 'https://i.pinimg.com/originals/c0/c8/37/c0c83763dd8693c8161d3610d9c9d0d0.jpg'
        },
        {
            id: 25,
            rl: 'https://www.onlygfx.com/wp-content/uploads/2021/02/6-pixel-heart-6.png'
        },
        {
            id: 26,
            rl: 'https://pngimg.com/uploads/butterfly/butterfly_PNG1016.png'
        },
        {
            id: 27,
            rl: 'https://thumbs.dreamstime.com/b/tropical-bright-orange-butterfly-23288431.jpg'
        },
        {
            id: 28,
            rl: 'https://t3.ftcdn.net/jpg/00/72/77/52/360_F_72775246_q9HAv97MGxOIp5rPojwNfFvZIB4Fq10X.jpg'
        },
        {
            id: 29,
            rl: 'https://t3.ftcdn.net/jpg/00/72/77/52/360_F_72775262_w5lx6hYnkkvmy317UZWgodnccyp270Cu.jpg'
        },
        {
            id: 30,
            rl: 'https://images.immediate.co.uk/production/volatile/sites/4/2022/09/Chimaera-Birdwing-4cee20f.jpg'

        }]);



app.post('/new', (req,res) => {
    console.log(req.body);
    item = [req.body,...item]

    res.json(item)
})


app.get('/images', (req, res) => {
    console.log(req.query);
    let arr = [...item]

    if (req.query.limit && req.query.limit != '0') {
        arr = arr.slice(0, +req.query.limit);
    }
    // res.statusMessage = 'okey'
    res.status(201).json(item)
})



app.listen(4000, (err) => {
    if (err) console.log(err);
    console.log('work');
})