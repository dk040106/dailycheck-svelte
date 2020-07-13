import { db } from './firebase';
import { getCurrentUser } from './auth';
import { dateString } from '../stores/data.js';

export const getCheck = async () => {
  await db
    .collection('users')
    .doc(res.user.uid.toString())
    .get()
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
};

export const setCheck = async (checkData) => {
  let submitData = {};
  submitData[dateString] = checkData;
  await db
    .collection('users')
    .doc(getCurrentUser().uid.toString())
    .set(submitData, { merge: true })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
};

export const getTodo = async () => {
  await db
    .collection('users')
    .doc(res.user.uid.toString())
    .get()
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
};

export const setTodo = async () => {
  await db
    .collection('users')
    .doc(res.user.uid.toString())
    .get()
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
};
