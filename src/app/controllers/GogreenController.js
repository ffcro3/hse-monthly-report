import 'dotenv/config';
import Gogreen from '../models/Gogreen';

class GogreenController {
  // SHOW CAPTATIONS
  async store(req, res) {
    const {
      reportid,
      target,
      number,
      started,
      descriptionstart,
      action,
      descriptionaction,
    } = req.body;

    try {
      const gogreen = await Gogreen.create({
        reportid,
        target,
        number,
        started,
        descriptionstart,
        action,
        descriptionaction,
      });

      return res.status(200).json(gogreen);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async show(req, res) {
    try {
      const gogreenFound = await Gogreen.find();

      return res.status(200).json(gogreenFound);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new GogreenController();
