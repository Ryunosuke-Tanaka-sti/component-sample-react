import {
  addDoc,
  collection,
  DocumentData,
  FirestoreDataConverter,
  getDocs,
  QueryDocumentSnapshot,
  serverTimestamp,
  SnapshotOptions,
} from 'firebase/firestore';

import { db } from '@/auth/authFirebase';
import { todoType } from '@/types/firestoreType';

export const useFireStore = () => {
  const todoConverter: FirestoreDataConverter<todoType> = {
    fromFirestore(
      snapshot: QueryDocumentSnapshot,
      options: SnapshotOptions
    ): todoType {
      const data = snapshot.data(options);
      return {
        uid: snapshot.id,
        done: data.done,
        text: data.text,
        timestamp: data.timestamp.toDate(),
      };
    },
    toFirestore(todo: todoType): DocumentData {
      return {
        text: todo.text,
        done: todo.done,
        timestamp: serverTimestamp(),
      };
    },
  };
  const getTodo = async (): Promise<todoType[]> => {
    const collRef = collection(db, 'todo').withConverter(todoConverter);
    const snapshot = await getDocs(collRef);
    const result = snapshot.docs.map((doc) => doc.data());
    return result;
  };
  const addTodo = async (todo: todoType): Promise<todoType> => {
    const collRef = collection(db, 'todo').withConverter(todoConverter);
    const result = await addDoc(collRef, todo);
    return {
      ...todo,
      uid: result.id,
    };
  };
  return { getTodo, addTodo };
};
