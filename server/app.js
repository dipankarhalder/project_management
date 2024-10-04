require('dotenv').config();

const http = require('http');
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');
const routes = require('./routes');

const port = process.env.PORT || 4001;
const logInfo = logger(
  ':method :url :status :response-time ms - :res[content-length] - :total-time ms'
);

const app = express();
connectDB();

app
  .use(cors({ origin: '*' }))
  .use(logInfo)
  .use(cookieParser())
  .use(express.json({ limit: '10MB' }))
  .use(express.urlencoded({ extended: true, limit: '10MB' }));

app.disable('x-powered-by');
app.use('/api', routes);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Project management app running on - ${port}`);
});
