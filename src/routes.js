import { Router } from 'express';
import multer from 'multer';

// CONTROLLERS IMPORT
import multerConfig from './config/multer';

import SiteController from './app/controllers/SiteController';
import Monthly from './app/controllers/MonthlyController';
import EnvironmentController from './app/controllers/EnvironmentController';
import PreventiveIndexController from './app/controllers/PreventiveIndexController';
import ASOController from './app/controllers/ASOController';
import AwayController from './app/controllers/AwayController';
import Ergo17Controller from './app/controllers/Ergo17Controller';
import ArchiveController from './app/controllers/ArchiveController';
import RestrictionController from './app/controllers/RestrictionController';
import CATController from './app/controllers/CATController';
import GogreenController from './app/controllers/GogreenController';
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
routes.get('/site/:id', SiteController.show);

// MONTHLY
routes.post('/monthly', Monthly.store);
routes.get('/monthly', Monthly.show);
routes.get('/monthly/:reportid', Monthly.show);

// ENVIRONMENT'
routes.post('/environment', EnvironmentController.store);
routes.get('/environment', EnvironmentController.show);
routes.get('/environment/:reportid', EnvironmentController.show);

// PREVENTIVE INDEX
routes.post('/preventiveindex', PreventiveIndexController.store);
routes.get('/preventiveindex', PreventiveIndexController.show);
routes.get('/preventiveindex/:reportid', PreventiveIndexController.show);

// ASO
routes.post('/aso', ASOController.store);
routes.get('/aso', ASOController.show);
routes.get('/aso/:reportid', ASOController.show);

// AWAY
routes.post('/away', AwayController.store);
routes.get('/away', AwayController.show);
routes.get('/away/:reportid', AwayController.show);

// ERGO17
routes.post('/ergo17', Ergo17Controller.store);
routes.get('/ergo17', Ergo17Controller.show);
routes.get('/ergo17/:reportid', Ergo17Controller.show);

// ARCHIVE
routes.post('/archive', ArchiveController.store);
routes.get('/archive', ArchiveController.show);
routes.get('/archive/:reportid', ArchiveController.show);

// RESTRICTION
routes.post('/restriction', RestrictionController.store);
routes.get('/restriction', RestrictionController.show);
routes.get('/restriction/:reportid', RestrictionController.show);

// CAT
routes.post('/cat', CATController.store);
routes.get('/cat', CATController.show);
routes.get('/cat/:reportid', CATController.show);

// GOGREEN
routes.post('/gogreen', GogreenController.store);
routes.get('/gogreen', GogreenController.show);
routes.get('/gogreen/:reportid', GogreenController.show);

// SESSION
routes.post('/login', SessionController.store);

// USERS
routes.get('/users', UserController.show);
routes.get('/users/:id', UserController.show);

export default routes;
