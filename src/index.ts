// remove .dotenv when going to production
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import validate from 'express-validation';
import express from 'express';

// routes
import appRoutes from './routes/app';

dotenv.config()
const app = express()
app.use(bodyParser.json())
app.use('/', appRoutes);

// error handler, required as of 0.3.0
app.use((err, res) => {
  res.status(400).json(err)
});

// @ts-ignore
const server = app.listen(process.env.PORT, process.env.ADDRESS, () => {
  console.log(`listening on ${server.address().address}:${server.address().port}`)
})