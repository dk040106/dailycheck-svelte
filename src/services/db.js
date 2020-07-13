import { db } from './firebase';
import { getCurrentUser } from './auth';
import { dateString } from '../stores/data.js';

export const getCheck = async () => {
  let habits;

  await db
    .collection('users')
    .doc(getCurrentUser().uid)
    .get()
    .then((doc) => {
      habits = doc.data()[dateString];
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });

  return habits;
};

export const setCheck = async (checkData) => {
  let submitData = {};
  submitData[dateString] = checkData;
  await db
    .collection('users')
    .doc(getCurrentUser().uid)
    .set(submitData, { merge: true })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
};
