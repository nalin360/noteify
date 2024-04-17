// src/Notes.js
import React from 'react';
import { DndContext } from '@dnd-kit/core';
import DraggableNote from './DraggableNote';
import useNotes from '@/hooks/useNotes';
import { Button } from '../ui/button';
import { X, Plus } from 'lucide-react';


const NotesList = () => {
  const { notes, addNote, updateNoteText, deleteNote } = useNotes();

  return (
    <div className='relative '>
      {/* <DndContext> */}
        <div className=''>
          {notes.map((note) => (
            <div className='flex flex-row' key={note.id}>
              <DraggableNote
                id={note.id}
                text={note.text}
                setText={(text) => updateNoteText(note.id, text)}
              />
              <Button onClick={() => deleteNote(note.id)}><X /></Button>
            </div>
          ))}
        </div>
        <Button className='fixed bottom-16 right-16  ' onClick={addNote}><Plus /></Button>
      {/* </DndContext> */}
    </div>
  );
};

export default NotesList;
