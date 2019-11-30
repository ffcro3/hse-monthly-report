import mongoose from 'mongoose';

const AwaySchema = new mongoose.Schema({
  reportid: String,
  had: String,
  number: String,
});

export default mongoose.model('Away', AwaySchema);
