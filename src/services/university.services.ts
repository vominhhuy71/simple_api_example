import University from '../models/university.models';

const findUniversity = async (uniName) => {
  const university = await University.findOne({ name: uniName });
  return university;
};
const addUniversity = async (uniName, location, address) => {
  const university = await University.create({
    name: uniName,
    location,
    address,
  });
  return university;
};

export { findUniversity, addUniversity };
