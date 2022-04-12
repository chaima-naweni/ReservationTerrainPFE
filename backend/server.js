const mongoose = require("mongoose")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config();

// DB Connection
mongoose.connect('mongodb://localhost:27017/reservation',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connected successfully to MongoDB !'))
  .catch(() => console.log('Connection failed to MongoDB !'));
// Use parsing middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// Import the routes
const userRoutes = require("./routes/users")
const terrainRoutes =require("./routes/terrain")
const  reservationRoutes=require("./routes/reservation")
const locRoutes=require('./routes/loc')
const villeRoutes=require('./routes/ville')
const passwordResetRoutes = require("./routes/passwordReset");
const authRoutes=require("./routes/auth")
const utilisateurRoutes=require("./routes/userss")
const  competitionRoutes=require('./routes/competition')
// Using routes
app.use('/api/users', userRoutes) 
app.use('/terrain',terrainRoutes)
app.use('/reservation',reservationRoutes)
app.use('/terrain/Loc',locRoutes)
app.use('/terrainParVille',villeRoutes)
app.use('/Users',utilisateurRoutes)
app.use("/api/password-reset", passwordResetRoutes);
app.use("/api/auth", authRoutes);
app.use("/competition",competitionRoutes)
const port = process.env.PORT || 3004

// Starting a server
app.listen(port, () => {
  console.log(`App is running at ${port}`)
})

 
  
