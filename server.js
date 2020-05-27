const dotenv = require('dotenv')
const express = require('express')

try {
  const parsedResult = dotenv.config()
  if (parsedResult.error) {
    throw parsedResult.error
  }
} catch (error) {
  console.log('Error setting up environment variables', error)
}


const app = express()


const mode = process.env.MODE
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server is running in ${mode} mode on port ${port}`))