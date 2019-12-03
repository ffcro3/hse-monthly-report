import 'dotenv/config';
import Archive from '../models/Archive';

class ArchiveController {
  // SHOW CAPTATIONS
  async store(req, res) {
    const { reportid, had, number } = req.body;

    try {
      const alreadyExists = await Archive.findOne({
        reportid,
      });

      if (alreadyExists) {
        const archiveUpdate = await Archive.updateOne(
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

        return res.status(200).json(archiveUpdate);
      }

      const archive = await Archive.create({
        reportid,
        had,
        number,
      });

      return res.status(200).json(archive);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async show(req, res) {
    try {
      const archiveFound = await Archive.find();

      return res.status(200).json(archiveFound);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new ArchiveController();
