import { Router } from 'express';
import multer from 'multer';

// CONTROLLERS IMPORT
import multerConfig from './config/multer';

import SiteController from './app/controllers/SiteController';
import Monthly from './app/controllers/MonthlyController';
// ROUTE CRIATION
const routes = new Router();
const upload = multer(multerConfig);

// SITE
routes.post('/site', SiteController.store);
routes.get('/site', SiteController.show);

// MONTHLY
routes.post('/monthly', Monthly.store);
routes.get('/monthly', Monthly.show);
export default routes;
