import 'dotenv/config';
import CATModel from '../models/CAT';

class CATController {
  // SHOW CAPTATIONS
  async store(req, res) {
    const {
      had,
      number,
      emission1,
      justify1,
      date1,
      dateemission1,
      type1,
      catnumber1,
      emission2,
      justify2,
      date2,
      dateemission2,
      type2,
      catnumber2,
      emission3,
      justify3,
      date3,
      dateemission3,
      type3,
      catnumber3,
      emission4,
      justify4,
      date4,
      dateemission4,
      type4,
      catnumber4,
      emission5,
      justify5,
      date5,
      dateemission5,
      type5,
      catnumber5,
      emission6,
      justify6,
      date6,
      dateemission6,
      type6,
      catnumber6,
      emission7,
      justify7,
      date7,
      dateemission7,
      type7,
      catnumber7,
    } = req.body;

    try {
      const cat = await CATModel.create({
        had,
        number,
        emission1,
        justify1,
        date1,
        dateemission1,
        type1,
        catnumber1,
        emission2,
        justify2,
        date2,
        dateemission2,
        type2,
        catnumber2,
        emission3,
        justify3,
        date3,
        dateemission3,
        type3,
        catnumber3,
        emission4,
        justify4,
        date4,
        dateemission4,
        type4,
        catnumber4,
        emission5,
        justify5,
        date5,
        dateemission5,
        type5,
        catnumber5,
        emission6,
        justify6,
        date6,
        dateemission6,
        type6,
        catnumber6,
        emission7,
        justify7,
        date7,
        dateemission7,
        type7,
        catnumber7,
      });

      return res.status(200).json(cat);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async show(req, res) {
    try {
      const catFound = await CATModel.find();

      return res.status(200).json(catFound);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new CATController();
