
import express, { response } from 'express'

const app = express()

app.get("/",( req, res) => {
    return response.json({msg: 'hgello'})
})

console.log('alodssdfsdfdso')

app.listen(3333)