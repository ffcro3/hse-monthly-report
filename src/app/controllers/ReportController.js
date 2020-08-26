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
    let clm = null;

    if (reportstring.includes('predio5')) {
      clm = reportstring.substring(0, reportstring.indexOf('-predio5'));
    }
    if (reportstring.includes('predio6')) {
      clm = reportstring.substring(0, reportstring.indexOf('-predio6'));
    }
    if (reportstring.includes('predio7')) {
      clm = reportstring.substring(0, reportstring.indexOf('-predio7'));
    }

    const reportFound = await Report.findOne({
      reportid: clm || reportstring,
    });

    if (!reportFound) {
      return res.json({
        error: "There's no data for the selected period",
      });
    }

    const monthly = await MonthlyReport.findOne({
      reportid: clm || reportstring,
    });

    const environment = await Environment.findOne({
      reportid: reportstring,
    });

    const preventiveindex = await PreventiveIndex.findOne({
      reportid: clm || reportstring,
    });

    const aso = await ASOModel.findOne({
      reportid: clm || reportstring,
    });

    const away = await Away.findOne({
      reportid: clm || reportstring,
    });

    const ergo = await Ergo17.findOne({
      reportid: clm || reportstring,
    });

    const archive = await Archive.findOne({
      reportid: clm || reportstring,
    });

    const restriction = await Restriction.findOne({
      reportid: clm || reportstring,
    });

    const cat = await CATModel.findOne({
      reportid: clm || reportstring,
    });

    const gogreen = await Gogreen.findOne({
      reportid: clm || reportstring,
    });

    fullReport.push({ report: reportFound });
    fullReport.push({ monthly });
    fullReport.push({ environment });
    fullReport.push({ preventiveindex });
    fullReport.push({ aso });
    fullReport.push({ away });
    fullReport.push({ ergo });
    fullReport.push({ archive });
    fullReport.push({ restriction });
    fullReport.push({ cat });
    fullReport.push({ gogreen });

    return res.status(200).json(fullReport);
  }
}
export default new ReportController();
