import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import { Game as GameModel } from './models/Game.model.js'
import errorHandler from './errorHandler.js'
import customError from './customError.js'
import path from 'path'
import { fileURLToPath } from 'url';
import { createGame, deleteGame, getGames, updateGame } from './controllers.js'
const app = express()
dotenv.config()


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('welcome to server')
})

app.get('/games', getGames)

app.post('/add', createGame)

app.patch('/edit/:id', updateGame)

app.delete('/delete/:id', deleteGame)

app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.use(errorHandler)

const port = process.env.PORT || 5100
async function DBconnect() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('connected to database')
        app.listen(port, () => {
            console.log(`server is running on ${port}`)
        })
        
    } catch(error) {
        console.log(error)
    }
}

DBconnect()

