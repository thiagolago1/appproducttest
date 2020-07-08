import { Router } from 'express';

import UserController from './controllers/UserController';
import ProductController from './controllers/ProductController';

const routes = Router();

// Users
routes.get('/users', UserController.index);
routes.post('/signup', UserController.create);
routes.post('/session', UserController.login);

// Product
routes.get('/products', ProductController.getAllProducts);
routes.get('/product/:id', ProductController.getProduct);
routes.put('/product', ProductController.addProduct);
routes.post('/product/:id', ProductController.updateProduct);
routes.delete('/product/:id', ProductController.deleteProduct);

export default routes;
