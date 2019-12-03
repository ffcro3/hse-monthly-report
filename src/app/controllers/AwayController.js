import 'dotenv/config';
import Away from '../models/Away';

class AwayController {
  // SHOW CAPTATIONS
  async store(req, res) {
    const { reportid, had, number } = req.body;

    try {
      const alreadyExists = Away.findOne({
        reportid,
      });

      if (alreadyExists) {
        const awayUpdate = Away.updateOne(
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

        return res.status(200).json(awayUpdate);
      }

      const away = await Away.create({
        reportid,
        had,
        number,
      });

      return res.status(200).json(away);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async show(req, res) {
    try {
      const awayFound = await Away.find();

      return res.status(200).json(awayFound);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new AwayController();
