const GLITCH=process.env.GLITCH
const ZEIT=process.env.ZEIT

const APINAME=process.env.CLOUDINARY_APINAME
const APIKEY=process.env.CLOUDINARY_APIKEY
const APISECRET=process.env.CLOUDINARY_APISECRET

const express = require('express')
const cloudy = require('cloudinary').v2

const app = express()

cloudy.config({ 
  cloud_name: APINAME, 
  api_key: APIKEY, 
  api_secret: APISECRET
});

cloudy.api.resources(
  { type: 'upload', max_results: 4 }, 
  function(error, result) {console.log(result, error); });

app.get('*', async (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send(`
        <h1>ZEIT NODE EXPRESS</h1>
        <h2>Go to <a href="/about">/about</a></h2>
    `)
})

if (GLITCH) {
  app.listen(process.env.PORT)
}

// if (ZEIT)
  module.exports = app
//

