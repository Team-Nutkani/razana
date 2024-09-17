const express = require("express");

const app = express();

require("dotenv").config();

app.get('/', (req, res) => {
    res.send("everything is right!");
})

app.listen(process.env.PORT || 9999, () => console.log(`Server is running on the http://localhost:${process.env.PORT}`)
)
