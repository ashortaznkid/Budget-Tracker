const express = require('express');
const path = require('path');
const routes = require('./controller');
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listenerCount(PORT, () => console.log('Now listening'));
});