const express = require('express')
const app = express()
const port = 4000
const connectdb = require('./config/connectdb')
const contactRoute = require('./route/contactRoutes')


connectdb()
//middle affich express
app.use(express.json())

app.use('/contact',contactRoute)






app.listen(port,err=>{
    err?console.log(err):console.log('go to the port => ${port}')

})