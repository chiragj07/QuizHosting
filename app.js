const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
dotenv.config({ path: './config.env' })
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log('connection successful to database'));
const port = process.env.PORT || 5000;
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,"/front/build")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"front","build","index.html"));
    })
}
app.use('/wrongans', require("./routes/wrongans"));
app.listen(port, ()=> console.log(`connected to port number ${port}`));
