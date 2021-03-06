import mongoose from 'mongoose';

const RestrictionSchema = new mongoose.Schema({
  title: {
    type: String,
    default: 'Restrições',
  },
  reportid: String,
  had: String,
  number: String,
  type1: String,
  reason1: String,
  start1: String,
  end1: String,
  days1: String,
  register1: String,
  name1: String,
  form1: String,
  description1: String,
  type2: String,
  reason2: String,
  start2: String,
  end2: String,
  days2: String,
  register2: String,
  name2: String,
  form2: String,
  description2: String,
  type3: String,
  reason3: String,
  start3: String,
  end3: String,
  days3: String,
  register3: String,
  name3: String,
  form3: String,
  description3: String,
  type4: String,
  reason4: String,
  start4: String,
  end4: String,
  days4: String,
  register4: String,
  name4: String,
  form4: String,
  description4: String,
  type5: String,
  reason5: String,
  start5: String,
  end5: String,
  days5: String,
  register5: String,
  name5: String,
  form5: String,
  description5: String,
  type6: String,
  reason6: String,
  start6: String,
  end6: String,
  days6: String,
  register6: String,
  name6: String,
  form6: String,
  description6: String,
  type7: String,
  reason7: String,
  start7: String,
  end7: String,
  days7: String,
  register7: String,
  name7: String,
  form7: String,
  description7: String,
});

export default mongoose.model('Restriction', RestrictionSchema);
