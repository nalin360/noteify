// src/useNotes.js
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { createDocuments, createNotesDB, deleteDB, updateDB } from '@/config/dbFirestore';
import { auth, db } from '@/config/firebase';

const useNotes =  (initialNotes = [{
	data: {
		id: 1,
		text: {
			html: "",
			markdown: ""
		}
	}
}]) => {
	const [notes, setNotes] = useState(initialNotes);

	const userId =  auth.currentUser;

	// console.log(userId.uid);
	
	createDocuments(userId.uid);
	const userIduid = userId.uid;
	const path = userIduid ? `/users/${userId.uid}/notes` : null;



	useEffect(() => {
		const unsubscribe = onSnapshot(collection(db, path), (snapshot) => {
			const notesData = snapshot.docs.map((doc) => ({

				id: doc.id,
				data: {
					...doc.data()
				},


			}));
			setNotes(notesData);
		});

		console.log(notes);

		return () => unsubscribe();
	}, [userId]);


	const addNote = async () => {
		const newNoteId = notes.length + 1/* the ID returned by createNotesDB */
		// Firestore will automatically generate a unique ID for the new document
		console.log("add", notes);
		await createNotesDB(path, "", newNoteId);
		// Assuming createNotesDB returns the new note's ID
		setNotes([...notes, { id: newNoteId, text }]);
	};


	const updateNoteText = async (id, text) => {
		const noteToUpdate = notes.find(note => note.id === id);
		console.log(id);
		if (noteToUpdate) {
			await updateDB(noteToUpdate.id, text, `${path}/${id}`);
			setNotes(notes.map(note => note.id === id ? { ...note, text } : note));
		}
	};


	const deleteNote = async (id) => {
		await deleteDB(path, id);
		setNotes(notes.filter(note => note.id !== id));
	};


	return { notes, addNote, updateNoteText, deleteNote };
};

export default useNotes;

