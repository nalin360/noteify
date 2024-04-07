// src/useNotes.js
import { useState } from 'react';

const useNotes = (initialNotes = [{ id: 'note1', text: '' }]) => {
 const [notes, setNotes] = useState(initialNotes);

 const addNote = () => {
    const newNoteId = `note${notes.length + 1}`;
    setNotes([...notes, { id: newNoteId, text: '' }]);
 };

 const updateNoteText = (id, text) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, text } : note)));
 };

 const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
 };

 return { notes, addNote, updateNoteText, deleteNote };
};

export default useNotes;
