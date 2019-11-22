const express = require('express');
const app = express();  
require("./db"); // koneksi database

// for parsing aplication/x-form-urlencoded
app.use(express.urlencoded({ extended : true }))

require('./routes/main')(app) // all routes imported

app.listen(3300, () => {
    console.log('Example app listening on port 3300')
});
