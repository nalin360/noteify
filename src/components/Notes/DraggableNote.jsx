// src/DraggableNote.js
import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Textarea } from '../ui/textarea';
import Editor from "./Editor";

const DraggableNote = ({ id, text, setText }) => {

	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id,
	});
	const style = {
		transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
	};

	// edditor
	const initialMarkdownContent = "**hi** write*something here*...";
	const [editorHtmlValue, setEditorHtmlValue] = useState("");
	const [editorMarkdownValue, setEditorMarkdownValue] = useState("");
   
	const onEditorContentChanged = (content) => {
	   setEditorHtmlValue(content.html);
	   setEditorMarkdownValue(content.markdown);
	   setText(content)
	};


	return (
		<div className='border border-gray-600 mb-1'
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
		>
			<Editor
				value={text}
				onChange={onEditorContentChanged}
			/>
		</div>
	);
};

export default DraggableNote;
