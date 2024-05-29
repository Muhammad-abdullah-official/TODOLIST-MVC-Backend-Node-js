const express = require('express');
const { gettodolist, addtasktotodolist } = require('../Controllers/controller');

const {
  gettodolistById,
  updatetodolist,
  deletetodolist,
} = require('../Controllers/controller');

const router = express.Router();

router.route('/').get(gettodolist).post(addtasktotodolist);
router
  .route('/:id')
  .get(gettodolistById)
  .put(updatetodolist)
  .delete(deletetodolist);

module.exports = router;
