import fs from 'node:fs/promises'

export const DB_PATH = decodeURIComponent(new URL('../db.json', import.meta.url).pathname)

// GET DATABASE
export const getDB = async ()=> {
    const db = await fs.readFile(DB_PATH, 'utf-8')

    return JSON.parse(db)
}
// SAVE DB
export const saveDB = async (db) => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
    return db
}

export const insertDB = async (note) => {
    const db = await getDB()
    db.notes.push(note)
    await saveDB(db)
    return note

}