const express = require("express");
require("dotenv").config();

// create an instance of express app
let app = express();

// cors setting
const cors = require('cors')
app.use(cors());
app.options('**', cors());

const api = {
    product: require('./routes/product'),
    category: require('./routes/category'),
}

app.use("/api/product", api.product)
app.use("/api/category", api.category)

app.listen(process.env.DEV_APP_PORT, () => {
    console.log(`Server has started on port ${process.env.DEV_APP_PORT}`);
});