import express from 'express'
import { router } from './api/router/router.product.js';
import routerUsers from './users/router/router.users.js';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use('/api',router)
app.use(morgan('tiny'));
app.use('/users',routerUsers)




app.listen(3020, () => {
    console.log(`Server is running on port 3020`);
  });
  