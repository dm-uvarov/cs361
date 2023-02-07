'use strict';



const PORT = 3000;

const express = require("express");
const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));



// route for get request of /order
app.get("/hello", (req, res) => {
    console.log(req.query.name)
    res.send(`A message from CS361, dear ${req.query.name}`)
})



// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});