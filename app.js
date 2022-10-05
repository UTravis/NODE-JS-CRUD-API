import express from "express";
import mongoose from "mongoose";
import router from "./routes/route.js";

const app = express();
const mongoDB = "mongodb://localhost:27017/musicLogDB";
const PORT = 5000;

mongoose.connect(mongoDB).then( () => {
    console.log('Connected to Mongo DB!!')
    app.listen(PORT, () => {
        console.log(`App is listening to port ${PORT}`);
    })
} ).catch( err => console.log(err) )

app.use(express.urlencoded({extended: true}));
app.use(router)
app.use( (req, res) => {
    res.statusCode = 404
    res.json({ error : "Endpoint Not Found" })
} )


