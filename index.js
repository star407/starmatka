const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const route = require('./routes/routes')
const cors = require('cors')
const app = express()
require('dotenv').config()
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

// cors
// app.use(cors)
// const corsOptions ={
//   origin:'http://localhost:8080', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200,
// }



// initializing port
let port = process.env.PORT || 3000

// setting headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
  });

// // swagger config
// const swaggerUi = require('swagger-ui-express')
// const swaggerDoc = require('./swagger.json');


// route
app.use(route)


const initServer =
    async () => {
  try {
    // listening to the server
    app.listen(
           port, () => {console.log(`Example app listening on port ${port}`)})

        // connecting to the database
        await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to Starmatka database.')
  } catch (error) {
    // exit server on error
    console.error(error);
    process.exit(1);
  }
}

// setting up swagger
// endpoint = http://localhost:<port>/api-docs/
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

initServer()

module.exports = {
    app
};