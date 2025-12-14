import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const usersCollection = collection(db, "users");

export const getUserByEmail = async (email) => {
  const q = query(usersCollection, where("email", "==", email));
  const snapshot = await getDocs(q);

  if (snapshot.empty) return null;

  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() };
};

export const createUser = async (data) => {
  const docRef = await addDoc(usersCollection, data);
  return { id: docRef.id, ...data };
};
