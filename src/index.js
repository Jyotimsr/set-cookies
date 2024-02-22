
express = require("express");
items = require("./route/item");
cookieParser = require('cookie-parser')
app = express();
port = 3000;

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

app.use('/',items)

app.listen(port, ()=>{
    console.log(` server is running at http://localhost:"  port`);
})

