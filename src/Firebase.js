import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {

  // place your firebase configuration file here then it will work
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();