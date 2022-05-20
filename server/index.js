const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.js");

require("dotenv").config();

// Initialize the server
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// Root route 
app.get("/", (req, res) => {
    res.send("Hello, world!") 
});

// Bring in the authentication routes
app.use("/auth", authRoutes);

// Listen to the app
app.listen(PORT, () => console.log(`Server is up and running on PORT ${PORT}`))