const dotenv = require('dotenv')
const morgan = require('morgan')
const express = require('express')

const app = express()

try {
  const parsedResult = dotenv.config()
  if (parsedResult.error) {
    throw parsedResult.error
  }
} catch (error) {
  console.log('Error setting up environment variables', error)
}

const node_env = process.env.NODE_ENV
const port = process.env.PORT || 3000


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}


// Mounting routes
const bootcampRouter = require('./routes/bootcamps')
app.use('/api/v1/bootcamps', bootcampRouter)

app.use('*', (req, res, next) => {
  res.status(404).send('Not found')
})

app.listen(port, () => console.log(`Server is running in ${node_env} mode on port ${port}`))