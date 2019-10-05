import express from 'express';

import { handleConvert } from './handleConvert';

const app = express();

app.get('/spell/:n', handleConvert);

app.listen(3000, () => console.log('Server started on port 3000'));
