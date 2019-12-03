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

  async calcPreventive(req, res) {
    const {
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

    let resultado_final = 0;

    // REGISTRO DE PIRÂMIDES
    if (pyramiddone >= pyramidexpect) {
      resultado_final = 0.05;
    } else {
      const calc = (pyramiddone / pyramidexpect) * 0.025;
      resultado_final += calc;
    }

    // RESOLUÇÃO DE PIRÂMIDES
    if (resolutiondone >= resolutionexpect) {
      resultado_final += 0.1;
    } else {
      const calc = (resolutiondone / resolutionexpect) * 0.05;

      resultado_final += calc;
    }

    // REALIZAÇÃO DE BBS
    if (bbsdone >= bbsexpect) {
      resultado_final += 0.1;
    } else {
      const calc = (bbsdone / bbsexpect) * 0.05;
      resultado_final += calc;
    }

    // BBS SEGURO
    if (safebbsdone >= safebbsexpect) {
      resultado_final += 0.05;
    } else {
      const calc = (safebbsdone / safebbsexpect) * 0.025;
      resultado_final += calc;
    }

    // INSPEÇÕES PROGRAMADAS
    if (inpectionsdone >= inpectionsexpect) {
      resultado_final += 0.05;
    } else {
      const calc = (inpectionsdone / inpectionsexpect) * 0.025;
      resultado_final += calc;
    }

    // BRIEFINGS COM TEMAS DE HSE
    if (briefingdone >= briefingexpect) {
      resultado_final += 0.05;
    } else {
      const calc = (briefingdone / briefingexpect) * 0.025;
      resultado_final += calc;
    }

    // PLANO DE AÇÃO - INSPEÇÕES PROGRAMADAS
    if (actionplandone >= actionplanexpect) {
      resultado_final += 0.1;
    } else {
      const calc = (actionplandone / actionplanexpect) * 0.05;
      resultado_final += calc;
    }

    // PLANO DE AÇÃO DO PAS %
    if (pasdone >= pasexpect) {
      resultado_final += 0.05;
    } else {
      const calc = (pasdone / pasexpect) * 0.025;
      resultado_final += calc;
    }

    // TREINAMENTOS DE HSE
    if (trainindone >= trainingexpect) {
      resultado_final += 0.05;
    } else {
      const calc = (trainindone / trainingexpect) * 0.025;
      resultado_final += calc;
    }

    // EXAMES MÉDICOS
    if (examsdone >= examsexpect) {
      resultado_final += 0.1;
    } else {
      const calc = 0;
      resultado_final += calc;
    }

    // TREINAMENTO NAS WIS
    if (widone >= wiexpect) {
      resultado_final += 0.1;
    } else {
      const calc = 0;

      resultado_final += calc;
    }

    // CHECKLIST DE EQUIPAMENTOS
    if (checklistdone >= checklistexpect) {
      resultado_final += 0.05;
    } else {
      const calc = 0;
      // eslint-disable-next-line operator-assignment
      resultado_final = resultado_final + calc;
    }

    // IDENTIFICAÇÃOD O CONDUTOR
    if (driverdone >= driverexpect) {
      resultado_final += 0.05;
    } else {
      const calc = 0;
      resultado_final += calc;
    }

    // MANUTENÇÃO PREVENTIVA
    if (maintenancedone >= maintenanceexpect) {
      resultado_final += 0.05;
    } else {
      const calc = (maintenancedone / maintenanceexpect) * 0.025;

      resultado_final += calc;
    }

    // SIMLADOS DE EMERGÊNCIA
    if (emergencyequipdone >= emergencyequipexpect) {
      resultado_final += 0.05;
    } else {
      const calc = 0;
      resultado_final += calc;
    }

    // PLANO DE AÇÃO IP
    if (aciontontimedone >= actionontimeexpect) {
      resultado_final += 0;
    } else {
      const calc = (aciontontimedone / actionontimeexpect) * 0.1 - 0.1;
      resultado_final += calc;
    }

    // TIFR
    if (tifrdone <= tifrexpect) {
      resultado_final += 0;
    } else {
      const calc = -0.1;
      resultado_final += calc;
    }

    // LTIFR
    if (ltifrdone <= ltifrexpect) {
      resultado_final += 0;
    } else {
      const calc = -0.1;
      resultado_final += calc;
    }

    return res.status(200).json({
      Resultado: resultado_final.toFixed(3),
    });
  }
}
export default new PreventiveIndexController();
