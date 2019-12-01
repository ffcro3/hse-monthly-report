import mongoose from 'mongoose';

const ArchiveSchema = new mongoose.Schema({
  title: {
    type: String,
    default: 'Arquivamentos',
  },
  reportid: String,
  had: String,
  number: String,
});

export default mongoose.model('Archive', ArchiveSchema);
