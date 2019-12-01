import mongoose from 'mongoose';

const ReportSchema = new mongoose.Schema({
  reportid: String,
  siteName: String,
  responsible: String,
  responsiblemail: String,
  manager: String,
  managermail: String,
  date: String,
});

export default mongoose.model('Report', ReportSchema);
