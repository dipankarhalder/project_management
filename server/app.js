require('dotenv').config();

const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

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
