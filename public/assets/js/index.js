document.addEventListener('DOMContentLoaded', () => {
  const noteTitle = document.querySelector('#note-title');
  const noteText = document.querySelector('#note-textarea');
  const saveNoteBtn = document.querySelector('#save-note');
  const newNoteBtn = document.querySelector('#new-note');
  const noteList = document.querySelector('#list-group');

  let activeNote = {};

  const showElement = (element) => {
    element.style.display = 'inline';
  };

  const hideElement = (element) => {
    element.style.display = 'none';
  };

  const getNotes = () =>
    fetch('/db/store.js', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());

  const saveNote = (note) =>
    fetch('/db/store.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    }).then((response) => response.json());

  const deleteNote = (id) =>
    fetch(`/db/store.js/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

  const renderActiveNote = () => {
    if (activeNote.id) {
      noteTitle.readOnly = true;
      noteText.readOnly = true;
      noteTitle.value = activeNote.title;
      noteText.value = activeNote.text;
    } else {
      noteTitle.readOnly = false;
      noteText.readOnly = false;
      noteTitle.value = '';
      noteText.value = '';
    }
  };

  const handleNoteSave = () => {
    const newNote = {
      title: noteTitle.value.trim(),
      text: noteText.value.trim(),
    };

    if (newNote.title && newNote.text) {
      saveNoteBtn.disabled = true;

      saveNote(newNote)
        .then(() => {
          getAndRenderNotes();
          renderActiveNote();
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          saveNoteBtn.disabled = false;
        });
    }
  };

  const handleNoteDelete = (e) => {
    e.stopPropagation();

    const note = e.target.closest('.list-group-item');
    const noteId = note.dataset.noteId;

    if (activeNote.id === noteId) {
      activeNote = {};
      renderActiveNote();
    }

    deleteNote(noteId)
      .then(() => {
        note.remove();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleNoteView = (e) => {
    e.preventDefault();

    const note = e.target.closest('.list-group-item');
    const noteId = note.dataset.noteId;
    const noteTitle = note.querySelector('.list-item-title').textContent;
    const noteText = note.querySelector('.list-item-text').textContent;

    activeNote = {
      id: noteId,
      title: noteTitle,
      text: noteText,
    };

    renderActiveNote();
  };

  const handleNewNoteView = () => {
    activeNote = {};
    renderActiveNote();
  };

  const handleRenderSaveBtn = () => {
    const isNoteEmpty = !noteTitle.value.trim() || !noteText.value.trim();
    saveNoteBtn.style.display = isNoteEmpty ? 'none' : 'inline';
  };

  const renderNoteList = (notes) => {
    noteList.innerHTML = '';

    if (notes.length === 0) {
      const emptyNote = document.createElement('li');
      emptyNote.classList.add('list-group-item', 'text-center');
      emptyNote.textContent = 'No saved notes';
      noteList.append(emptyNote);
      return;
    }

    notes.forEach((note) => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.dataset.noteId = note.id;

      const titleElement = document.createElement('span');
      titleElement.classList.add('list-item-title');
      titleElement.textContent = note.title;
      titleElement.addEventListener('click', handleNoteView);

      const deleteButton = document.createElement('i');
      deleteButton.classList.add('fas', 'fa-trash-alt', 'float-right', 'text-danger', 'delete-note');
      deleteButton.addEventListener('click', handleNoteDelete);

      listItem.append(titleElement, deleteButton);
      noteList.append(listItem);
    });
  };

  const getAndRenderNotes = () => {
    getNotes()
      .then((notes) => renderNoteList(notes))
      .catch((err) => {
        //console.error(err);
      });
  };

  saveNoteBtn.addEventListener('click', handleNoteSave);
  newNoteBtn.addEventListener('click', handleNewNoteView);
  noteTitle.addEventListener('keyup', handleRenderSaveBtn);
  noteText.addEventListener('keyup', handleRenderSaveBtn);

  getAndRenderNotes();
});
``
