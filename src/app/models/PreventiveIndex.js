import mongoose from 'mongoose';

const PreventiveSchema = new mongoose.Schema({
  pyramidexpect: String,
  pyramiddone: String,
  resolutionexpect: String,
  resolutiondone: String,
  bbsexpect: String,
  bbsdone: String,
  inpectionsexpect: String,
  inpectionsdone: String,
  briefingexpect: String,
  briefingdone: String,
  actionplanexpect: String,
  actionplandone: String,
  pasexpect: String,
  pasdone: String,
  trainingexpect: String,
  trainindone: String,
  examsexpect: String,
  examsdone: String,
  wiexpect: String,
  widone: String,
  checklistexpect: String,
  checklistdone: String,
  driverexpect: String,
  driverdone: String,
  maintenanceexpect: String,
  maintenancedone: String,
  emergencyequipexpect: String,
  emergencyequipdone: String,
  actionontimeexpect: String,
  aciontontimedone: String,
  finalresult: String,
});

export default mongoose.model('PreventiveIndex', PreventiveSchema);