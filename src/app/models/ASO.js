import mongoose from 'mongoose';

const AsoSchema = new mongoose.Schema({
  reportid: String,
  had: String,
  number: String,
});

export default mongoose.model('ASO', AsoSchema);
