import 'dotenv/config';
import Site from '../models/Site';

import Queue from '../../lib/Queue';

class SiteController {
  // SHOW CAPTATIONS
  async store(req, res) {
    const {
      sector,
      state,
      city,
      name,
      responsible,
      responsiblemail,
      manager,
      managermail,
    } = req.body;

    try {
      const siteCreation = await Site.create({
        sector,
        state,
        city,
        name,
        responsible,
        responsiblemail,
        manager,
        managermail,
      });

      return res.status(200).json(siteCreation);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async show(req, res) {
    try {
      const siteFound = await Site.find();

      return res.status(200).json(siteFound);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new SiteController();
