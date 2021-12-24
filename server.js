const express = require("express");
const http = require("http");
const app = express();
app.use((req, res, next) => {
    console.log("In the middleware"); next();
});
app.use((req, res, next) => {
    console.log("In another middleware");
    //	next();
});
const server = http.createServer(app);
server.listen(5000);

 HTML
const express = require("express");
const http = require("http");
const app = express();
app.use((req, res, next) => {
    console.log("In the middleware"); next();
});
app.use((req, res, next) => {
    console.log("In another middleware"); res.send("<h1>Hello from express</h1>");
    //	next();
});
const server = http.createServer(app);
server.listen(5000);

 app
const express = require("express"); const app = express();
app.use((req, res, next) => {
    console.log("In the middleware"); next();
});
app.use((req, res, next) => {
    console.log("In another middleware"); res.send("<h1>Hello from express</h1>");
    //	next();
});
app.listen(5000);

 get / post  / product.routes.js
const express = require("express");
const router = express.Router();
router.get("/add-product", (req, res, next) => {
    res.send(
        `<form action="/product/add-product" method="POST">
<input type="text" name="title">
<button type="submit">Create Product</button>
</form>`
    );
});
router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});
module.exports = router;
