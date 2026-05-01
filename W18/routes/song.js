const express = require('express');
const router = express.Router();

const songController = require('../controller/song');

router.get('/insert', songController.insertSongs);
router.get('/all', songController.getAll);
router.get('/director/:name', songController.directorSongs);
router.get('/director/:director/:singer', songController.directorSinger);
router.get('/delete/:name', songController.deleteSong);
router.post('/add', songController.addSong);
router.get('/film/:singer/:film', songController.singerFilm);
router.put('/update/:name', songController.updateActor);
router.get('/table', songController.table);

module.exports = router;