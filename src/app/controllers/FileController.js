import path from 'path';
import fs from 'fs';

class FileController {
  async delete(req, res) {
    const directory = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'uploads'
    );
    fs.readdir(directory, (err, files) => {
      if (err) throw err;

      if (files.length <= 0) {
        return res.status(400).json({
          error: 'There are no files to delete',
        });
      }

      files.forEach(async element => {
        await fs.unlink(path.join(directory, element));
        console.log(`Photo ${element} deleted`);
        return res.status(200).json({
          message: `It was removed ${files.length} photos`,
        });
      });
    });
  }
}

export default new FileController();
