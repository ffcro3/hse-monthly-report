import mongoose from 'mongoose';

const ReportSchema = new mongoose.Schema({
  code: String,
  siteName: String,
  responsible: String,
  date: String,
});

export default mongoose.model('Report', ReportSchema);
