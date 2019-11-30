import 'dotenv/config';
import Ergo17 from '../models/Ergo17';

class ASOController {
  // SHOW CAPTATIONS
  async store(req, res) {
    const {
      result,
      actions,
      implemented,
      code1,
      implementation1,
      phase1,
      action1,
      code2,
      implementation2,
      phase2,
      action2,
      code3,
      implementation3,
      phase3,
      action3,
      code4,
      implementation4,
      phase4,
      action4,
      code5,
      implementation5,
      phase5,
      action5,
      code6,
      implementation6,
      phase6,
      action6,
      code7,
      implementation7,
      phase7,
      action7,
    } = req.body;

    try {
      const away = await Ergo17.create({
        result,
        actions,
        implemented,
        code1,
        implementation1,
        phase1,
        action1,
        code2,
        implementation2,
        phase2,
        action2,
        code3,
        implementation3,
        phase3,
        action3,
        code4,
        implementation4,
        phase4,
        action4,
        code5,
        implementation5,
        phase5,
        action5,
        code6,
        implementation6,
        phase6,
        action6,
        code7,
        implementation7,
        phase7,
        action7,
      });

      return res.status(200).json(away);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async show(req, res) {
    try {
      const ergoFound = await Ergo17.find();

      return res.status(200).json(ergoFound);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new ASOController();
