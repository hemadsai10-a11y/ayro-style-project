import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Ayro Style Backend is running',
  })
})

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body

  console.log('Contact Form Data:')
  console.log('Name:', name)
  console.log('Email:', email)
  console.log('Message:', message)

  res.json({
    success: true,
    message: 'Your message was received successfully.',
  })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})