import mongoose from 'mongoose';

const AsoSchema = new mongoose.Schema({
  had: String,
  number: String,
});

export default mongoose.model('ASO', AsoSchema);
