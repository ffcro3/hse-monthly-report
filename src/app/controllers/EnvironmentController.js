import 'dotenv/config';
import Environment from '../models/Environment';
import EnvironmentTSP from '../models/EnvironmentTSP';
import EnvironmentBusiness from '../models/EnvironmentBusiness';

class MonthlyController {
  // SHOW CAPTATIONS
  async storeWHS(req, res) {
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

  async showWHS(req, res) {
    try {
      const monthly = await Environment.find();

      return res.status(200).json(monthly);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async storeTSP(req, res) {
    const { data } = req.body;

    try {
      const alreadyExists = await EnvironmentTSP.findOne({
        reportid: data.reportid,
      });

      if (alreadyExists) {
        const environmentUpdate = await EnvironmentTSP.updateOne(
          {
            reportid: data.reportid,
          },
          {
            $set: data,
          }
        );

        return res.status(200).json(environmentUpdate);
      }

      const enviromentData = await EnvironmentTSP.create(data);

      return res.status(200).json(enviromentData);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async showTSP(req, res) {
    try {
      const monthly = await EnvironmentTSP.find();

      return res.status(200).json(monthly);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async storeBusiness(req, res) {
    const { data } = req.body;

    try {
      const alreadyExists = await EnvironmentBusiness.findOne({
        reportid: data.reportid,
      });

      if (alreadyExists) {
        const environmentUpdate = await EnvironmentBusiness.updateOne(
          {
            reportid: data.reportid,
          },
          {
            $set: data,
          }
        );

        return res.status(200).json(environmentUpdate);
      }

      const enviromentData = await EnvironmentBusiness.create(data);

      return res.status(200).json(enviromentData);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async showBusiness(req, res) {
    try {
      const monthly = await EnvironmentBusiness.find();

      return res.status(200).json(monthly);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new MonthlyController();
