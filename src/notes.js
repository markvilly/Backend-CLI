import { insertDB, saveDB, getDB } from "./db.js";


export const newNote = async (note, tags) => {
    const newNote = {
        content: note,
        id: Date.now(),
        tags
    }

    await insertDB(newNote)
    return newNote 
}

export const getAllNotes = async () => {
    const {notes} = await getDB()
    return notes
}

export const findlNotes = async (filter) => {
    const {notes} = await getDB()
    return notes.filter( note => note.content.toLowerCase().includes(filter.content.toLowerCase()))
}

export const removeNote = async (id)=> {
    const notes = await getAllNotes()
    const match = notes.find(note => note.id === id)

    if(match){
        const newNotes = notes.filter(note => note.id !== id)
        await saveDB({notes: newNotes})
        return id
    }
}