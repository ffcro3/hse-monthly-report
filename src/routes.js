import { Router } from 'express';
import multer from 'multer';
import cors from 'cors';

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
import ReportController from './app/controllers/ReportController';
import MailControlller from './app/controllers/MailControlller';
import ExcelController from './app/controllers/ExcelController';

// ROUTE CRIATION
const routes = new Router();

routes.use(cors());
const upload = multer(multerConfig);

// SESSION
routes.post('/session', SessionController.store);
routes.post('/users', UserController.store);

// AUTHENTICATED ROUTES

routes.use(authMiddleware);

// UPLOAD
routes.post(
  '/environment/business/upload',
  upload.single('file'),
  ExcelController.store
);

// SITE
routes.post('/site', SiteController.store);
routes.get('/site', SiteController.show);
routes.get('/site/:id', SiteController.show);
routes.get('/sectors', SiteController.showSector);
routes.get('/sectors/:sites', SiteController.showSectorSites);

// MONTHLY
routes.post('/monthly', Monthly.store);
routes.get('/monthly', Monthly.show);
routes.get('/monthly/:reportid', Monthly.show);

// ENVIRONMENT'
routes.post('/environment/whs', EnvironmentController.storeWHS);
routes.post('/environment/tsp', EnvironmentController.storeTSP);
routes.post('/environment/business', EnvironmentController.storeBusiness);
routes.get('/environment/whs', EnvironmentController.showWHS);
routes.get('/environment/tsp', EnvironmentController.showTSP);
routes.get('/environment/business', EnvironmentController.showBusiness);
routes.get('/environment/:reportid', EnvironmentController.showWHS);

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

// REPORT
routes.post('/report', ReportController.store);
routes.get('/report/:reportid', ReportController.show);

// JUSTIFICATIVAS
routes.post('/justify/aso', MailControlller.mailASO);
routes.post('/justify/away', MailControlller.mailAway);
routes.post('/justify/ergo', MailControlller.mailErgo);
routes.post('/justify/archive', MailControlller.mailArchive);
routes.post('/justify/restriction', MailControlller.mailRestriction);
routes.post('/justify/cat', MailControlller.mailCAT);

// CALC IP
routes.post('/ipcalc', PreventiveIndexController.calcPreventive);

export default routes;
