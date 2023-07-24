const util = require('util');
const fs = require('fs');
const { v1: uuidv1 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  async read() {
    try {
      const notesData = await readFileAsync('db/db.json', 'utf8');
      return JSON.parse(notesData) || [];
    } catch (err) {
      return [];
    }
  }

  async write(notes) {
    await writeFileAsync('db/db.json', JSON.stringify(notes));
  }

  async getNotes() {
    try {
      const notes = await this.read();
      return Array.isArray(notes) ? notes : [];
    } catch (err) {
      return [];
    }
  }

  async addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    }

    const newNote = { title, text, id: uuidv1() };

    try {
      const notes = await this.getNotes();
      const updatedNotes = [...notes, newNote];
      await this.write(updatedNotes);
      return newNote;
    } catch (err) {
      throw new Error('Failed to add note');
    }
  }

  async removeNote(id) {
    try {
      const notes = await this.getNotes();
      const filteredNotes = notes.filter((note) => note.id !== id);
      await this.write(filteredNotes);
    } catch (err) {
      throw new Error('Failed to remove note');
    }
  }
}

module.exports = new Store();
