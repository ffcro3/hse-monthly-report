import 'dotenv/config';
import PreventiveIndex from '../models/PreventiveIndex';

class PreventiveIndexController {
  // SHOW CAPTATIONS
  async store(req, res) {
    const {
      reportid,
      pyramidexpect,
      pyramiddone,
      resolutionexpect,
      resolutiondone,
      bbsexpect,
      bbsdone,
      safebbsexpect,
      safebbsdone,
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
      tifrexpect,
      tifrdone,
      ltifrexpect,
      ltifrdone,
      finalresult,
    } = req.body;

    try {
      const alreadyExists = await PreventiveIndex.findOne({
        reportid,
      });

      if (alreadyExists) {
        const preventiveUpdate = await PreventiveIndex.updateOne(
          {
            reportid,
          },
          {
            $set: {
              pyramidexpect,
              pyramiddone,
              resolutionexpect,
              resolutiondone,
              bbsexpect,
              bbsdone,
              safebbsexpect,
              safebbsdone,
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
              tifrexpect,
              tifrdone,
              ltifrexpect,
              ltifrdone,
              finalresult,
            },
          }
        );

        return res.status(200).json(preventiveUpdate);
      }

      const ip = await PreventiveIndex.create({
        reportid,
        pyramidexpect,
        pyramiddone,
        resolutionexpect,
        resolutiondone,
        bbsexpect,
        bbsdone,
        safebbsexpect,
        safebbsdone,
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
        tifrexpect,
        tifrdone,
        ltifrexpect,
        ltifrdone,
        finalresult,
      });

      return res.status(200).json(ip);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async show(req, res) {
    const { reportid } = req.params;

    if (reportid) {
      try {
        const ipFound = await PreventiveIndex.findOne({
          reportid,
        });

        return res.status(200).json(ipFound);
      } catch (err) {
        return res.status(400).json(err);
      }
    }

    try {
      const ipFound = await PreventiveIndex.find();

      return res.status(200).json(ipFound);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new PreventiveIndexController();
