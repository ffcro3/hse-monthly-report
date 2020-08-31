import mongoose from 'mongoose';

const EnviromentBusinessSchema = new mongoose.Schema({
  title: {
    type: String,
    default: 'Report Ambiental - TSP',
  },
  reportid: String,
  site: String,
  building: String,
  gasoline: String,
  glp: String,
  diesel: String,
});

export default mongoose.model('EnvironmentBusiness', EnviromentBusinessSchema);
