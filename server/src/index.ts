import express from 'express';
import { main } from './services/databaseService';

require('dotenv').config()


// Routes
import culturalInsightsRouter from './routes/prompts';
import locationsRouter from './routes/locations';


// Database
main()
  .then(console.log)
  .catch(console.error)


const app = express();
app.use(express.json());
app.use('/cultural-insights', culturalInsightsRouter);
app.use('/', locationsRouter);

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
