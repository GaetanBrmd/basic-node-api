//All the jobs functions
import User from '../models/user.model';

const sampleJob1 = async () => {
  console.log('Sample job fired 🙋 !');

  let report = await User.findAll({ attributes: ['id', 'name'] });

  report.forEach((u) => {
    console.log(u.get());
  });
};

export default {
  sampleJob1,
  //sampleJob2,
};
