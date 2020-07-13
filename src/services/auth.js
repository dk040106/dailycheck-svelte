import { auth, db } from './firebase';
import { userStore } from '../stores/data';

export const signOut = async () => {
  // sign out
  await auth.signOut().catch((error) => {
    console.log(error);
    alert(error.message);
  });
  console.log('signout');
  userStore.set(null);
};

export const signIn = async (email, password) => {
  // sign in with email and password
  let res = await auth
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
  userStore.set({
    uid: res.user.uid,
    email: res.user.email,
  });
};

export const createUser = async (email, password) => {
  // create user
  let res = await auth
    .createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });

  // make db for todo list
  await db
    .collection('users')
    .doc(res.user.uid.toString())
    .set({
      todo: ['First Todo', 'Second Todo', 'Third Todo'],
      check: [],
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });

  // send email verification
  sendEmailVerification();
};

export const sendEmailVerification = async () => {
  let user = await getCurrentUser();
  user.sendEmailVerification();
};

export const sendPasswordResetEmail = (email) => {
  auth.sendPasswordResetEmail(email);
};

export const isEmailVerified = () => {
  return getCurrentUser().emailVerified;
};

export const getCurrentUser = () => {
  return auth.currentUser;
};

export const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
