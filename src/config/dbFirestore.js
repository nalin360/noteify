import { addDoc, collection, deleteDoc, doc, getDocFromCache, setDoc, updateDoc } from 'firebase/firestore';
import firebase, { auth, db } from './firebase';
// dbfirstore.js
export const createDocuments =  async (uid) => {
    const path = `users/${uid}`;
   //  console.log(db);
    await setDoc(doc(db , path ))

    // await setDoc(doc(db , `${path}/analysis` ))

}

// async function fetchAnalysisData(uid) {
//     const docRef = doc(db, `users/${uid}/analysis`);
//     const docSnap = await getDoc(docRef);
   
//     if (docSnap.exists()) {
//        return docSnap.data().notesData; // Assuming 'notesData' is the field name for the array
//     } else {
//        console.log("No such document!");
//        return [];
//     }
//    }
export const createNotesDB = async (path,text , id) => {
    
    await addDoc(collection(db, path), { id ,text });
 };

export const updateDB = async (id, text , path) => {
    // const docPath = `${path}/9tqPiYanBNbz08CsLAYA`;
    await updateDoc(doc(db, path), { text:text });
 };

export const deleteDB = async (path , id) => {
   console.log("id", id);
    await deleteDoc(doc(db, path, id));
 };