import { Router } from 'express';
import multer from 'multer';

// CONTROLLERS IMPORT
import multerConfig from './config/multer';

import SiteController from './app/controllers/SiteController';
import Monthly from './app/controllers/MonthlyController';
import EnvironmentController from './app/controllers/EnvironmentController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import authMiddleware from './app/middlewares/auth';

// ROUTE CRIATION
const routes = new Router();

// SESSION
routes.post('/session', SessionController.store);
routes.post('/users', UserController.store);

// AUTHENTICATED ROUTES

routes.use(authMiddleware);

// SITE
routes.post('/site', SiteController.store);
routes.get('/site', SiteController.show);

// MONTHLY
routes.post('/monthly', Monthly.store);
routes.get('/monthly', Monthly.show);

// ENVIRONMENT'
routes.post('/environment', EnvironmentController.store);
routes.get('/environment', EnvironmentController.show);

// SESSION
routes.post('/login', SessionController.store);

// USERS
routes.get('/users', UserController.show);
routes.get('/users/:id', UserController.show);

export default routes;
