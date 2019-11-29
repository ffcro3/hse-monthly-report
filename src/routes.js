import { Router } from 'express';
import multer from 'multer';

// CONTROLLERS IMPORT
import multerConfig from './config/multer';

import SiteController from './app/controllers/SiteController';
import Monthly from './app/controllers/MonthlyController';
import EnvironmentController from './app/controllers/EnvironmentController';
// ROUTE CRIATION
const routes = new Router();
const upload = multer(multerConfig);

// SITE
routes.post('/site', SiteController.store);
routes.get('/site', SiteController.show);

// MONTHLY
routes.post('/monthly', Monthly.store);
routes.get('/monthly', Monthly.show);

// ENVIRONMENT'
routes.post('/environment', EnvironmentController.store);
routes.get('/environment', EnvironmentController.show);

export default routes;
