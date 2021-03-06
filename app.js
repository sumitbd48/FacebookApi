const express = require('express')
const bodyParser = require('body-parser')

require('./db/db')

const path = require("path")
const publicDir = path.join(__dirname,'public')



const userRouter = require('./routers/userRoute')
const fbpostRouter = require('./routers/fbpostRoute')

const app = express()
app.use(express.static(publicDir)) 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(userRouter);
app.use(fbpostRouter);

app.listen("3020");
