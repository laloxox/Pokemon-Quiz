import http from 'http';
import axios from 'axios';


const server = http.createServer( (req, res) => {
    res.end('Node + babel');
    }).listen(4001);

    console.log('Server start');

export default server;



var config = {
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=151',
    headers: { }
};

axios( config )
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

    