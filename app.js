import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import router from './routes/web.js';
import connectDataBase from './db/connectDataBase.js';
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express()
const port = process.env.PORT || 8080;
const DATABASE_URL = process.env.DATABASE_URL;

app.use(cors())

// middleware
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))


app.use("/", router)

connectDataBase(DATABASE_URL)


app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
})


