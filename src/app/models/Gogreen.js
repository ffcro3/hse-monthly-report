import mongoose from 'mongoose';

const GogreenSchema = new mongoose.Schema({
  title: {
    type: String,
    default: 'GoGreen',
  },
  reportid: String,
  target: String,
  number: String,
  started: String,
  descriptionstart: String,
  action: String,
  descriptionaction: String,
});

export default mongoose.model('Gogreen', GogreenSchema);
