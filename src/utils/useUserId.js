import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Function to get the current user's UID
const auth = getAuth();



async function getFirebaseUserUID() {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      return user.uid
    } else {
      return null;
    }
  });
}
export default getFirebaseUserUID;