const express = require('express')
const router = express.Router()

const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deletBootcamp
} = require('../controllers/bootcamps')

router
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp)

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deletBootcamp)


module.exports = router