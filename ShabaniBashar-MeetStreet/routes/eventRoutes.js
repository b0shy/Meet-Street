const express = require('express');
const controller = require('../controllers/eventController');
const {fileUpload} = require('../middleware/fileUpload');
const router = express.Router();
const {isLoggedIn, isAuthor} = require('../middleware/auth');
const {validateId} = require('../middleware/validator');

//GET /events: send all events to the user

router.get('/', controller.index);

//GET /events/new: send html form for creating a new event

router.get('/new', isLoggedIn, controller.new);

//POST /events: create a new story

router.post('/', isLoggedIn, fileUpload, controller.create);

//GET /events/:id: send details of event identified by id
router.get('/:id', validateId, controller.show);

//GET /events/:id/edit: send html form for editing an existing event
router.get('/:id/edit', isLoggedIn, isAuthor, validateId, controller.edit);

//PUT /events/:id: update the event identified by id
router.put('/:id', isLoggedIn, isAuthor, validateId, fileUpload, controller.update);

//DELETE /events/:id: delete the event identified by id
router.delete('/:id', isLoggedIn, isAuthor, validateId, controller.delete);

module.exports = router;