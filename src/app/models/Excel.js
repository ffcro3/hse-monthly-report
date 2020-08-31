import mongoose from 'mongoose';

const ExcelSchema = new mongoose.Schema(
  {
    name: String,
    reportid: String,
    build: String,
    fileName: String,
    type: String,
    path: String,
    date: Date,
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// eslint-disable-next-line func-names
ExcelSchema.virtual('file_url').get(function() {
  return `${process.env.APP_URL}/files/${this.path}`;
});

export default mongoose.model('Excel', ExcelSchema);
