import 'dotenv/config';
import asoModel from '../models/ASO';

class ASOController {
  // SHOW CAPTATIONS
  async store(req, res) {
    const { reportid, had, number } = req.body;

    try {
      const alreadyExists = await asoModel.findOne({
        reportid,
      });

      if (alreadyExists) {
        const asoUpdate = await asoModel.updateOne(
          {
            reportid,
          },
          {
            $set: {
              had,
              number,
            },
          }
        );

        return res.status(200).json(asoUpdate);
      }

      const aso = await asoModel.create({
        reportid,
        had,
        number,
      });

      return res.status(200).json(aso);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async show(req, res) {
    try {
      const asoFound = await asoModel.find();

      return res.status(200).json(asoFound);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new ASOController();
