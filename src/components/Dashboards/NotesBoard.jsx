import React from 'react'
import NotesList from '../Notes/NotesList'

function NotesBoard() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Notes</h1>
            </div>
            {/* the main area  */}
            <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
                <NotesList />
            </div>
        </main>
    )
}

export default NotesBoard