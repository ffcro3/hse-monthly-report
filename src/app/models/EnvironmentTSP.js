import mongoose from 'mongoose';

const EnviromentTSPSchema = new mongoose.Schema({
  title: {
    type: String,
    default: 'Report Ambiental - TSP',
  },
  reportid: String,
  site: String,
  building: String,
  gasoline: String,
  gasolineowner: String,
  gasolinecomments: String,
  glp: String,
  glpowner: String,
  glpcomments: String,
  diesel: String,
  dieselowner: String,
  dieselcomments: String,
  ethanol: String,
  ethanolowner: String,
  ethanolcomments: String,
  lng: String,
  lngowner: String,
  lngcomments: String,
  gnc: String,
  gncowner: String,
  gnccomments: String,
  biomethane: String,
  biomethaneowner: String,
  biomethanecomments: String,
  r134: String,
  r134owner: String,
  r134comments: String,
  r404: String,
  r404owner: String,
  r404comments: String,
  r407a: String,
  r407aowner: String,
  r407acomments: String,
  r407f: String,
  r407fowner: String,
  r407fcomments: String,
  r422a: String,
  r422aowner: String,
  r422acomments: String,
  energy: String,
  energyowner: String,
  energycomments: String,
});

export default mongoose.model('EnvironmentTSP', EnviromentTSPSchema);
