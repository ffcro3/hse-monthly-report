import 'dotenv/config';
import PreventiveIndex from '../models/PreventiveIndex';

class PreventiveIndexController {
  // SHOW CAPTATIONS
  async store(req, res) {
    const {
      pyramidexpect,
      pyramiddone,
      resolutionexpect,
      resolutiondone,
      bbsexpect,
      bbsdone,
      inpectionsexpect,
      inpectionsdone,
      briefingexpect,
      briefingdone,
      actionplanexpect,
      actionplandone,
      pasexpect,
      pasdone,
      trainingexpect,
      trainindone,
      examsexpect,
      examsdone,
      wiexpect,
      widone,
      checklistexpect,
      checklistdone,
      driverexpect,
      driverdone,
      maintenanceexpect,
      maintenancedone,
      emergencyequipexpect,
      emergencyequipdone,
      actionontimeexpect,
      aciontontimedone,
      finalresult,
    } = req.body;

    try {
      const ip = await PreventiveIndex.create({
        pyramidexpect,
        pyramiddone,
        resolutionexpect,
        resolutiondone,
        bbsexpect,
        bbsdone,
        inpectionsexpect,
        inpectionsdone,
        briefingexpect,
        briefingdone,
        actionplanexpect,
        actionplandone,
        pasexpect,
        pasdone,
        trainingexpect,
        trainindone,
        examsexpect,
        examsdone,
        wiexpect,
        widone,
        checklistexpect,
        checklistdone,
        driverexpect,
        driverdone,
        maintenanceexpect,
        maintenancedone,
        emergencyequipexpect,
        emergencyequipdone,
        actionontimeexpect,
        aciontontimedone,
        finalresult,
      });

      return res.status(200).json(ip);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async show(req, res) {
    try {
      const ipFound = await PreventiveIndex.find();

      return res.status(200).json(ipFound);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new PreventiveIndexController();
