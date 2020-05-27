// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).send('Show bootcamps')
}

// @desc Get a single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).send('Show bootcamp of given id')
}

// @desc Create a bootcamp
// @route POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = (req, res, next) => {
  res.status(201).send('Create new bootcamp')
}

// @desc Update a bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).send('Update bootcamp with given id')
}

// @desc Delet a bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deletBootcamp = (req, res, next) => {
  res.status(200).send('Delete bootcamp with given id')
}