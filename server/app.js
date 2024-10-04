require('dotenv').config();

const http = require('http');
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');

const port = process.env.PORT || 4001;
const app = express();
connectDB();

app
  .use(cors({ origin: '*' }))
  .use(
    logger(
      ':method :url :status :response-time ms - :res[content-length] - :total-time ms'
    )
  )
  .use(cookieParser())
  .use(express.json({ limit: '10MB' }))
  .use(express.urlencoded({ extended: true, limit: '10MB' }));

app.disable('x-powered-by');

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Project management app running on - ${port}`);
});
