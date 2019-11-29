import mongoose from 'mongoose';

const EnviromentSchema = new mongoose.Schema({
  dhlowned: String,
  water: String,
  energy: String,
  lgpforklift: String,
  lgpdining: String,
  diesel: String,
  gasoline: String,
  r22: String,
  r402b: String,
  r407c: String,
  r404a: String,
  r134a: String,
  paper: String,
  plastic: String,
  metal: String,
  glass: String,
  organic: String,
  batterymhe: String,
  battery: String,
  lights: String,
  tires: String,
  motoroil: String,
  kitchenoil: String,
  ete: String,
  effluent: String,
  wood: String,
});

export default mongoose.model('Environment', EnviromentSchema);
