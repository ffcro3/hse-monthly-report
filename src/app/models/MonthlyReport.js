import mongoose from 'mongoose';

const MonthlySchema = new mongoose.Schema({
  reportid: String,
  efectives: String,
  lta: String,
  daysaway: String,
  rwc: String,
  daystransfer: String,
  mtc: String,
  fac: String,
  temporary: String,
  illnessaway: String,
  illnesstransfer: String,
  materialincidenthigh: String,
  materialincidentlow: String,
  hoursworked: String,
  hourstraining: String,
  hoursbriefing: String,
  incidenthigh: String,
  incidentlow: String,
  incidentpath: String,
  incidentenvironment: String,
  lastincident: String,
});

export default mongoose.model('monthly', MonthlySchema);
