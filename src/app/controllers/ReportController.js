import 'dotenv/config';
import { parseISO, formatISO } from 'date-fns';

import Report from '../models/Report';
import Site from '../models/Site';
import MonthlyReport from '../models/MonthlyReport';
import Environment from '../models/Environment';
import PreventiveIndex from '../models/PreventiveIndex';
import ASOModel from '../models/ASO';
import Away from '../models/Away';
import Ergo17 from '../models/Ergo17';
import Archive from '../models/Archive';
import Restriction from '../models/Restriction';
import CATModel from '../models/CAT';
import Gogreen from '../models/Gogreen';

class ReportController {
  // SHOW CAPTATIONS
  async store(req, res) {
    const { sitename, year, month } = req.body;
    const noSpacesSite = sitename.replace(/\s/g, '');
    const reportstring = `${year.trim()}${month.trim()}${noSpacesSite.trim()}`;

    try {
      const alreadyExists = await Report.findOne({
        reportid: reportstring,
      });

      if (alreadyExists) {
        return res.status(200).json(alreadyExists);
      }

      const siteInfo = await Site.findOne({
        name: sitename,
      });

      const newReport = await Report.create({
        reportid: reportstring,
        siteName: sitename,
        responsible: siteInfo.responsible,
        responsiblemail: siteInfo.responsiblemail,
        manager: siteInfo.manager,
        managermail: siteInfo.managermail,
        date: formatISO(new Date()),
      });

      return res.status(200).json(newReport);
    } catch (err) {
      return res.status(200).json(err);
    }
  }

  async show(req, res) {
    const reportstring = req.params.reportid;
    const fullReport = [];

    try {
      const reportFound = await Report.findOne({
        reportid: reportstring,
      });

      const monthly = await MonthlyReport.findOne({
        reportid: reportFound.reportid,
      });

      const environment = await Environment.findOne({
        reportid: reportFound.reportid,
      });

      const preventiveindex = await PreventiveIndex.findOne({
        reportid: reportFound.reportid,
      });

      const aso = await ASOModel.findOne({
        reportid: reportFound.reportid,
      });

      const away = await Away.findOne({
        reportid: reportFound.reportid,
      });

      const ergo = await Ergo17.findOne({
        reportid: reportFound.reportid,
      });

      const archive = await Archive.findOne({
        reportid: reportFound.reportid,
      });

      const restriction = await Restriction.findOne({
        reportid: reportFound.reportid,
      });

      const cat = await CATModel.findOne({
        reportid: reportFound.reportid,
      });

      const gogreen = await Gogreen.findOne({
        reportid: reportFound.reportid,
      });

      fullReport.push(monthly);
      fullReport.push(environment);
      fullReport.push(preventiveindex);
      fullReport.push(aso);
      fullReport.push(away);
      fullReport.push(ergo);
      fullReport.push(archive);
      fullReport.push(restriction);
      fullReport.push(cat);
      fullReport.push(gogreen);

      return res.status(200).json(fullReport);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new ReportController();
