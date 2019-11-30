import mongoose from 'mongoose';

const ArchiveSchema = new mongoose.Schema({
  reportid: String,
  had: String,
  number: String,
});

export default mongoose.model('Archive', ArchiveSchema);
