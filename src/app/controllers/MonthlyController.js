import 'dotenv/config';
import MonthlyReport from '../models/MonthlyReport';

import Queue from '../../lib/Queue';

class MonthlyController {
  // SHOW CAPTATIONS
  async store(req, res) {
    const { data } = req.body;

    try {
      const alreadyExists = await MonthlyReport.findOne({
        reportid: data.reportid,
      });

      if (alreadyExists) {
        const reportUpdate = await MonthlyReport.updateOne(
          {
            reportid: data.reportid,
          },
          {
            $set: data,
          }
        );

        return res.status(200).json(reportUpdate);
      }

      const monthlyReport = await MonthlyReport.create(data);

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
