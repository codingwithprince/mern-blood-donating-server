import express from 'express'
import router from './routes/web.js';
import connectDataBase from './db/connectDataBase.js';
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 8080;
const DATABASE_URL = "mongodb+srv://codingwithprince:Princ34hmeD@cluster0.om7jc2g.mongodb.net/?retryWrites=true&w=majority"

app.use(cors())

// middleware
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))


app.use("/", router)

connectDataBase(DATABASE_URL)


app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`);
})


