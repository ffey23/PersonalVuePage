const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const { body, validationResult } = require('express-validator')
app.post(
  '/API/contact',
  body('email').isEmail(),
  body('message').isLength({ min: 31 }),
  function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    res.json({ msg: 'Your message has been sent!' })
  }
)

app.listen(8666, () => {
  console.log('Listening on port 8666')
})
