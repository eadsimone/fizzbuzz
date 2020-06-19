const express= require('express');
const app = express();

const generateResult = (from = 1, to = 100) =>{
    const res=[];
    for (let i = from; i <= to; i++){
        if( (i % 3) === 0  && (i % 5) === 0 ){
            res[i]="FizzBuzz";
        }else if( i % 3 === 0 ){
            res[i]="Fizz";
        }else if( i % 5 === 0 ){
            res[i]="Buzz";
        }
    }
    return res;
}

// app.use(cors({
//     origin: 'http://localhost:3000'
// }));

const cors = require("cors");

app.use(cors({
    origin: function(origin, callback){
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3030',
    'http://localhost:8080',
];


app.get('/result', (req, res)=>{
    const json= {...generateResult()};
    res.json(json);
})
app.listen(8080, ()=>{
    console.log('running api in port 8080');
})
