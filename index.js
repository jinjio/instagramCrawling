const Instagram = require('instagram-web-api')
const axios = require('axios')
const cheerio = require("cheerio");
const dotenv = require("dotenv").config();
const express = require('express') 
const app = express() 
const port = 4000 

const username = process.env.USERNAME
const password = process.env.PASSWORD


const client = new Instagram({ username: username, password: password })
client
  .login()
  .then(() => {
    client
      .search({ query: '모윰' })
      .then(console.log)
  })



// const url = "https://www.instagram.com/explore/tags/%EB%AA%A8%EC%9C%B0/"
// const getHtml = async () => { 
//     console.log(url)
//     try { 
//         return await axios.get(url); 
//     } catch (error) {
//         console.log(error)
//     }
// };
// _7UhW9.vy6Bb.MMzan.KV-D4.uL8Hv.T0kll 
// getHtml()
//   .then(html => {
//     const $ = cheerio.load(html.data);
//     console.log($)
  //   return null
  // })


app.get('/', (req, res) => { 
  res.send('Hello World!') 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 

