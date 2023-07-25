import NewNote from "../components/NewNote"
import NewNoteStyles from "../components/NewNotes.css"

export default function NotesPage() {
    return (
        <main>
           <NewNote/>
        </main>
    )
}

export function action() {
    
}

export function links() {
    return [{rel: "stylesheet", href: NewNoteStyles}]
}