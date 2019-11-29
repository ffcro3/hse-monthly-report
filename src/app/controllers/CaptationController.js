import 'dotenv/config';
import Captation from '../models/Captation';
import File from '../models/File';

import Queue from '../../lib/Queue';
import FinishMail from '../jobs/FinishMail';

class CaptationController {
  // SHOW CAPTATIONS
  async show(req, res) {
    const { id } = req.params;

    if (id) {
      try {
        const oneCaptation = await Captation.findOne({
          _id: id,
        });

        return res.status(200).json(oneCaptation);
      } catch (err) {
        return res.status(400).json(err);
      }
    }

    try {
      const captations = await Captation.find();

      return res.status(200).json(captations);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  // CREATE A NEW CAPTATION
  async store(req, res) {
    const imagesUploaded = req.files;
    const newcod = `CAP_${Math.floor(100000 + Math.random() * 900000)}`;
    const { type, finality, city, neighborhood, name, email, phone } = req.body;
    const images = [];

    try {
      await imagesUploaded.map(image => {
        let arrayImage = `${process.env.IMAGE_PATH}/${image.filename}`;
        const imageCreate = File.create({
          code: newcod,
          filename: image.filename,
          path: `${process.env.IMAGE_PATH}/${image.filename}`,
        });
        images.push(arrayImage);
      });

      const captationCreate = await Captation.create({
        type,
        finality,
        city,
        neighborhood,
        name,
        email,
        phone,
        images,
      });

      await Queue.add(FinishMail.key, {
        captationCreate,
      });

      console.log('Mail sent');

      return res.status(200).json(captationCreate);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

export default new CaptationController();
