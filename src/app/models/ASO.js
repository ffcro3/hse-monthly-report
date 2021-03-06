import mongoose from 'mongoose';

const AsoSchema = new mongoose.Schema({
  title: {
    type: String,
    default: 'ASO',
  },
  reportid: String,
  had: String,
  number: String,
});

export default mongoose.model('ASO', AsoSchema);
