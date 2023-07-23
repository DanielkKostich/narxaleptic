const router = require('express').Router();
const saveEmail = require('../db/db');


router.post('/email', (req, res) => {
    saveEmail
      .addNote(req.body)
      .then((email) => res.json(email))
      .catch((err) => res.status(500).json(err));
  });
  
 
  router.delete('/email/:id', (req, res) => {
    saveEmail
      .removeEmail(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch((err) => res.status(500).json(err));
  });
  
  module.exports = router;
  