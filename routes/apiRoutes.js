const express = require('express');
const router = express.Router();
const store = require('../db/store');

router.get('/notes', async (req, res) => {
  try {
    const notes = await store.getNotes();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve notes' });
  }
});

router.post('/notes', async (req, res) => {
  try {
    const note = await store.addNote(req.body);
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add note' });
  }
});

router.delete('/notes/:id', async (req, res) => {
  try {
    await store.removeNote(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete note' });
  }
});

module.exports = router;
