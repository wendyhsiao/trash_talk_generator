const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const Handlebars = require('handlebars')

const trashTalkGenerator = require('./trash_talk_generator.js')

Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this)
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('req.body', req.body)
  const options = req.body
  const trashTalk = trashTalkGenerator(options)

  res.render('index', { trashTalk: trashTalk, options: options })
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})
