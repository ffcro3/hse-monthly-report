import 'dotenv/config';
import { resolve } from 'path';
import { format } from 'date-fns';

import Excel from '../models/Excel';

class ExcelController {
  async store(req, res) {
    console.log('started');
    const { originalname: name, filename: path } = req.file;
    const { reportid, build, fileName, type } = req.body;

    try {
      const file = await Excel.create({
        reportid,
        build,
        fileName,
        name,
        path,
        type,
        date: new Date(),
      });

      console.log(file);

      return res.status(200).json(file);
    } catch (err) {
      return res.status(400).json({
        Error: err,
      });
    }
  }
}
export default new ExcelController();
