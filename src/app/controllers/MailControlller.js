import 'dotenv/config';
import asoModel from '../models/ASO';

import Queue from '../../lib/Queue';
import AsoMail from '../jobs/AsoMail';
import AwayMail from '../jobs/AwayMail';
import ErgoMail from '../jobs/ErgoMail';
import ArchiveMail from '../jobs/ArchiveMail';
import RestrictionMail from '../jobs/RestrictionMail';
import CATMail from '../jobs/CATMail';

class MailController {
  // SHOW CAPTATIONS
  async mailASO(req, res) {
    const { user, sector, site, responsible, aso, justify } = req.body;

    const mailData = {
      user,
      sector,
      site,
      responsible,
      aso,
      justify,
    };

    try {
      await Queue.add(AsoMail.key, {
        mailData,
      });

      return res.status(200).json(mailData);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async mailAway(req, res) {
    const { user, sector, site, responsible, away, justify } = req.body;

    const mailData = {
      user,
      sector,
      site,
      responsible,
      away,
      justify,
    };

    try {
      await Queue.add(AwayMail.key, {
        mailData,
      });

      return res.status(200).json(mailData);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async mailErgo(req, res) {
    const { user, sector, site, responsible, ergo, justify } = req.body;

    const mailData = {
      user,
      sector,
      site,
      responsible,
      ergo,
      justify,
    };

    try {
      await Queue.add(ErgoMail.key, {
        mailData,
      });

      return res.status(200).json(mailData);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async mailArchive(req, res) {
    const { user, sector, site, responsible, archive, justify } = req.body;

    const mailData = {
      user,
      sector,
      site,
      responsible,
      archive,
      justify,
    };

    try {
      await Queue.add(ArchiveMail.key, {
        mailData,
      });

      return res.status(200).json(mailData);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async mailRestriction(req, res) {
    const { user, sector, site, responsible, restrictions, justify } = req.body;

    const mailData = {
      user,
      sector,
      site,
      responsible,
      restrictions,
      justify,
    };

    try {
      await Queue.add(RestrictionMail.key, {
        mailData,
      });

      return res.status(200).json(mailData);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async mailCAT(req, res) {
    const { user, sector, site, responsible, cat, justify } = req.body;

    const mailData = {
      user,
      sector,
      site,
      responsible,
      cat,
      justify,
    };

    try {
      await Queue.add(CATMail.key, {
        mailData,
      });

      return res.status(200).json(mailData);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new MailController();
