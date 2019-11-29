import mongoose from 'mongoose';

const CaptationSchema = new mongoose.Schema({
  type: String,
  finality: String,
  city: String,
  neighborhood: String,
  name: String,
  email: String,
  phone: Number,
  isRead: {
    type: Boolean,
    default: false,
  },
  isSent: {
    type: Boolean,
    default: false,
  },
  images: Array,
});

export default mongoose.model('Captation', CaptationSchema);
