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

const fs = require('fs');

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


fs.appendFileSync('text.txt', 'privet mi mi mi');

fs.appendFile("text.txt", 'privet mi mi mi', (error) => {
    if (error) console.log(error);

    console.log(('zapis faila zavershena sofer. failov'));
    let data = fs.readFileSync('text.txt', 'utf8');
});