import bodyParser from 'body-parser';
import express, { Application } from 'express';
import cors, { CorsOptions } from 'cors';
import http from 'http';

const app: Application = express();

const corsOptions: CorsOptions = {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization', 'token-sesion'],
    optionsSuccessStatus: 200,
    credentials: true 
}

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);
/*const io = require("socket.io")(server, {
    cors: corsOptions
});*/

app.use(async (req, res, next) => {
    next();
});

export default server;