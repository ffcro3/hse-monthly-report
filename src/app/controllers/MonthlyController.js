import 'dotenv/config';
import MonthlyReport from '../models/MonthlyReport';

import Queue from '../../lib/Queue';

class MonthlyController {
  // SHOW CAPTATIONS
  async store(req, res) {
    const {
      reportid,
      efectives,
      lta,
      daysaway,
      rwc,
      daystransfer,
      mtc,
      fac,
      temporary,
      illnessaway,
      illnesstransfer,
      materialincidenthigh,
      materialincidentlow,
      hoursworked,
      hourstraining,
      hoursbriefing,
      incidenthigh,
      incidentlow,
      incidentpath,
      incidentenvironment,
      lastincident,
    } = req.body;

    try {
      const monthlyReport = await MonthlyReport.create({
        reportid,
        efectives,
        lta,
        daysaway,
        rwc,
        daystransfer,
        mtc,
        fac,
        temporary,
        illnessaway,
        illnesstransfer,
        materialincidenthigh,
        materialincidentlow,
        hoursworked,
        hourstraining,
        hoursbriefing,
        incidenthigh,
        incidentlow,
        incidentpath,
        incidentenvironment,
        lastincident,
      });

      return res.status(200).json(monthlyReport);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async show(req, res) {
    try {
      const reportFound = await MonthlyReport.find();

      return res.status(200).json(reportFound);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new MonthlyController();
