import mongoose from 'mongoose';

const AwaySchema = new mongoose.Schema({
  title: {
    type: String,
    default: 'Afastamentos',
  },
  reportid: String,
  had: String,
  number: String,
});

export default mongoose.model('Away', AwaySchema);
