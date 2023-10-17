import express from "express"
import cors from "cors"

const app = express()

app.use(cors())

app.get('/api/info', (_, res) => {
    res.json({status: 'Hello from Node.js server!'})
})

app.listen(3000, () => {
    console.log('Server online!')
})