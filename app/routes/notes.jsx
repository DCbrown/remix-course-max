import NewNote from "../components/NewNote"
import NewNoteStyles from "../components/NewNotes.css"

export default function NotesPage() {
    return (
        <main>
           <NewNote/>
        </main>
    )
}

export function links() {
    return [{rel: "stylesheet", href: NewNoteStyles}]
}