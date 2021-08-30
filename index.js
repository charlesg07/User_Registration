const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('nodebody-parser');

const app = express();
app.use(bodyParser.json());

const employee = require('./routes/employee');
app.use('/employee',employee);

mongoose.connect('mongodb://localhost:27017/mernstack', {
    useNewUrlParser: true,
    useFindAndModify: false,
},(err)=> {
    if(err){
        process.exit(1);
        console.log('unable to connect database');
    }
    else
        console.log('database connected successfully');
});

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('app is running');
});