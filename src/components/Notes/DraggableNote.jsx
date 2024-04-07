// src/DraggableNote.js
import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Textarea } from '../ui/textarea';

const DraggableNote = ({ id, text, setText }) => {
 const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
 });

 const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
 };

 return (
    <div className='border border-gray-600 mb-1'
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
 );
};

export default DraggableNote;
