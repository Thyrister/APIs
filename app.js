const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv/config');
const bodyParser = require('body-parser');
const cors  = require('cors');


//import routes
const router =  require('./routes/posts');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/posts', router);

//for routes
app.get('/' , (req,res)=>{
        res.send('Hello There');
});

//db connection
mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
        if(err)
         console.log(err);

        console.log('connected to dbs')
    });
    



app.listen(3000)


