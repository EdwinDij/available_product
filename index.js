import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World from server!');
    });

app.listen(3000, () => console.log('Server running on port 3000'));

