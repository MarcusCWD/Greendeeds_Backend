const express = require("express");
require("dotenv").config();

// create an instance of express app
let app = express();

// cors setting
const cors = require('cors')
app.use(cors());
app.options('**', cors());

const api = {
    terrarium: require('./routes/terrarium'),
    product: require('./routes/product'),
    plant: require('./routes/plant'),
}

app.use("/api/terrarium", api.terrarium)
app.use("/api/product", api.product)
app.use("/api/plant", api.plant)

app.listen(process.env.DEV_APP_PORT, () => {
    console.log(`Server has started on port ${process.env.DEV_APP_PORT}`);
});