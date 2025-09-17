import 'dotenv/config'
import express from "express"
import routes from './routes'
import connectdb from './db/connect'

const app = express()
connectdb()

app.use('/api', routes)

app.get('/',(req, res) => {
    res.send('HOLA MUNDO')
})

const PORT = process.env.PORT || 4000

app.listen(PORT,() => {
    console.log("App escuchando en puerto:", PORT)
})