import mongoose from 'mongoose';

const ErgoSchema = new mongoose.Schema({
  reportid: String,
  result: String,
  actions: String,
  implemented: String,
  code1: String,
  implementation1: String,
  phase1: String,
  action1: String,
  code2: String,
  implementation2: String,
  phase2: String,
  action2: String,
  code3: String,
  implementation3: String,
  phase3: String,
  action3: String,
  code4: String,
  implementation4: String,
  phase4: String,
  action4: String,
  code5: String,
  implementation5: String,
  phase5: String,
  action5: String,
  code6: String,
  implementation6: String,
  phase6: String,
  action6: String,
  code7: String,
  implementation7: String,
  phase7: String,
  action7: String,
});

export default mongoose.model('Ergo17', ErgoSchema);
