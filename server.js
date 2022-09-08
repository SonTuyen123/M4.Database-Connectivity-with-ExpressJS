const express = require('express');
const webRouter = require("./routers/web.router");
const apiRouter = require("./routers/api.router");
const session = require('express-session');
const path = require("path");
const app = express();
const port = 8080;
// static file
app.use(express.static(path.join(__dirname, 'public')));
// set views
app.set('views', path.join(__dirname, 'views'))
// set views engine
app.set('view engine', 'ejs')
// set router
app.use('/', webRouter)
app.use('/api', apiRouter)

app.listen(port, 'localhost', () => {
    console.log('server listening on http://localhost:' + port)
})
