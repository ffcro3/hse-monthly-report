import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema({
  code: String,
  filename: String,
  path: String,
});

export default mongoose.model('File', FileSchema);
