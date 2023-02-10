import express from 'express';
import { expressConfig } from './express.config';
import cors from 'cors';

const app = express();
const router = express.Router();

expressConfig(router);
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});