const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const server = require('http').createServer(app);

server.listen(process.env.PORT || 3098);
app.use(cors({ exposedHeaders: ["Link"] }));
app.use(bodyParser.urlencoded({ extended: true, }));
app.use(bodyParser.json({ limit: "50MB" }));


app.get('/', async (req, res) => {
    res.status(400);
    res.json({ status: 400 });
});
