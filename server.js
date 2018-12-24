const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const routes = require("./controllers/burgers_controllers");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");
app.use(routes);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log(`Listening on port: ${PORT}`);
    });
});