import 'dotenv/config';
import PreventiveIndex from '../models/PreventiveIndex';

class PreventiveIndexController {
  // SHOW CAPTATIONS
  async store(req, res) {
    const { data } = req.body;

    try {
      const alreadyExists = await PreventiveIndex.findOne({
        reportid: data.reportid,
      });

      if (alreadyExists) {
        const preventiveUpdate = await PreventiveIndex.updateOne(
          {
            reportid: data.reportid,
          },
          {
            $set: data,
          }
        );

        return res.status(200).json(preventiveUpdate);
      }

      const ip = await PreventiveIndex.create(data);

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
    const { data } = req.body;

    let resultado_final = 0;

    // REGISTRO DE PIRÂMIDES
    if (data.pyramiddone >= data.pyramidexpect) {
      resultado_final = 0.05;
    } else {
      const calc = (data.pyramiddone / data.pyramidexpect) * 0.025;
      resultado_final += calc;
    }

    // RESOLUÇÃO DE PIRÂMIDES
    if (data.resolutiondone >= data.resolutionexpect) {
      resultado_final += 0.1;
    } else {
      const calc = (data.resolutiondone / data.resolutionexpect) * 0.05;

      resultado_final += calc;
    }

    // REALIZAÇÃO DE BBS
    if (data.bbsdone >= data.bbsexpect) {
      resultado_final += 0.1;
    } else {
      const calc = (data.bbsdone / data.bbsexpect) * 0.05;
      resultado_final += calc;
    }

    // BBS SEGURO
    if (data.safebbsdone >= data.safebbsexpect) {
      resultado_final += 0.05;
    } else {
      const calc = (data.safebbsdone / data.safebbsexpect) * 0.025;
      resultado_final += calc;
    }

    // INSPEÇÕES PROGRAMADAS
    if (data.inpectionsdone >= data.inpectionsexpect) {
      resultado_final += 0.05;
    } else {
      const calc = (data.inpectionsdone / data.inpectionsexpect) * 0.025;
      resultado_final += calc;
    }

    // BRIEFINGS COM TEMAS DE HSE
    if (data.briefingdone >= data.briefingexpect) {
      resultado_final += 0.05;
    } else {
      const calc = (data.briefingdone / data.briefingexpect) * 0.025;
      resultado_final += calc;
    }

    // PLANO DE AÇÃO - INSPEÇÕES PROGRAMADAS
    if (data.actionplandone >= data.actionplanexpect) {
      resultado_final += 0.1;
    } else {
      const calc = (data.actionplandone / data.actionplanexpect) * 0.05;
      resultado_final += calc;
    }

    // PLANO DE AÇÃO DO PAS %
    if (data.pasdone >= data.pasexpect) {
      resultado_final += 0.05;
    } else {
      const calc = (data.pasdone / data.pasexpect) * 0.025;
      resultado_final += calc;
    }

    // TREINAMENTOS DE HSE
    if (data.trainindone >= data.trainingexpect) {
      resultado_final += 0.05;
    } else {
      const calc = (data.trainindone / data.trainingexpect) * 0.025;
      resultado_final += calc;
    }

    // EXAMES MÉDICOS
    if (data.examsdone >= data.examsexpect) {
      resultado_final += 0.1;
    } else {
      const calc = 0;
      resultado_final += calc;
    }

    // TREINAMENTO NAS WIS
    if (data.widone >= data.wiexpect) {
      resultado_final += 0.1;
    } else {
      const calc = 0;

      resultado_final += calc;
    }

    // CHECKLIST DE EQUIPAMENTOS
    if (data.checklistdone >= data.checklistexpect) {
      resultado_final += 0.05;
    } else {
      const calc = 0;
      // eslint-disable-next-line operator-assignment
      resultado_final = resultado_final + calc;
    }

    // IDENTIFICAÇÃOD O CONDUTOR
    if (data.driverdone >= data.driverexpect) {
      resultado_final += 0.05;
    } else {
      const calc = 0;
      resultado_final += calc;
    }

    // MANUTENÇÃO PREVENTIVA
    if (data.maintenancedone >= data.maintenanceexpect) {
      resultado_final += 0.05;
    } else {
      const calc = (data.maintenancedone / data.maintenanceexpect) * 0.025;

      resultado_final += calc;
    }

    // SIMLADOS DE EMERGÊNCIA
    if (data.emergencyequipdone >= data.emergencyequipexpect) {
      resultado_final += 0.05;
    } else {
      const calc = 0;
      resultado_final += calc;
    }

    // PLANO DE AÇÃO IP
    if (data.aciontontimedone >= data.actionontimeexpect) {
      resultado_final += 0;
    } else {
      const calc =
        (data.aciontontimedone / data.actionontimeexpect) * 0.1 - 0.1;
      resultado_final += calc;
    }

    // TIFR
    if (data.tifrdone <= data.tifrexpect) {
      resultado_final += 0;
    } else {
      const calc = -0.1;
      resultado_final += calc;
    }

    // LTIFR
    if (data.ltifrdone <= data.ltifrexpect) {
      resultado_final += 0;
    } else {
      const calc = -0.1;
      resultado_final += calc;
    }

    return res.status(200).json({
      Resultado: resultado_final * 100,
    });
  }
}
export default new PreventiveIndexController();
