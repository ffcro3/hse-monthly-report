import mongoose from 'mongoose';

const SiteSchema = new mongoose.Schema({
  sector: String,
  state: String,
  city: String,
  name: String,
  responsible: String,
  responsiblemail: String,
  manager: String,
  managermail: String,
});

export default mongoose.model('Site', SiteSchema);
