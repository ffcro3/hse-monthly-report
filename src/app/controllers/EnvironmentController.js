import 'dotenv/config';
import Environment from '../models/Environment';

import Queue from '../../lib/Queue';

class MonthlyController {
  // SHOW CAPTATIONS
  async store(req, res) {
    const {
      reportid,
      dhlowned,
      water,
      energy,
      lgpforklift,
      lgpdining,
      diesel,
      gasoline,
      r22,
      r402b,
      r407c,
      r404a,
      r134a,
      paper,
      plastic,
      metal,
      glass,
      organic,
      batterymhe,
      battery,
      lights,
      tires,
      motoroil,
      kitchenoil,
      ete,
      effluent,
      wood,
    } = req.body;

    try {
      const alreadyExists = await Environment.findOne({
        reportid,
      });

      if (alreadyExists) {
        const environmentUpdate = await Environment.updateOne(
          {
            reportid,
          },
          {
            $set: {
              dhlowned,
              water,
              energy,
              lgpforklift,
              lgpdining,
              diesel,
              gasoline,
              r22,
              r402b,
              r407c,
              r404a,
              r134a,
              paper,
              plastic,
              metal,
              glass,
              organic,
              batterymhe,
              battery,
              lights,
              tires,
              motoroil,
              kitchenoil,
              ete,
              effluent,
              wood,
            },
          }
        );

        return res.status(200).json(environmentUpdate);
      }

      const enviromentData = await Environment.create({
        reportid,
        dhlowned,
        water,
        energy,
        lgpforklift,
        lgpdining,
        diesel,
        gasoline,
        r22,
        r402b,
        r407c,
        r404a,
        r134a,
        paper,
        plastic,
        metal,
        glass,
        organic,
        batterymhe,
        battery,
        lights,
        tires,
        motoroil,
        kitchenoil,
        ete,
        effluent,
        wood,
      });

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
