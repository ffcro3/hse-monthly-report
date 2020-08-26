import 'dotenv/config';
import Environment from '../models/Environment';

import Queue from '../../lib/Queue';

class MonthlyController {
  // SHOW CAPTATIONS
  async store(req, res) {
    const { data } = req.body;

    try {
      const alreadyExists = await Environment.findOne({
        reportid: data.reportid,
      });

      if (alreadyExists) {
        const environmentUpdate = await Environment.updateOne(
          {
            reportid: data.reportid,
          },
          {
            $set: data,
          }
        );

        return res.status(200).json(environmentUpdate);
      }

      const enviromentData = await Environment.create(data);

      return res.status(200).json(enviromentData);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async show(req, res) {
    try {
      const monthly = await Environment.find();

      return res.status(200).json(monthly);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new MonthlyController();
