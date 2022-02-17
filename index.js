const Instagram = require('instagram-web-api')
const axios = require('axios')
const cheerio = require("cheerio");
const express = require('express') 
const app = express() 
const port = 4000 

const { username, password } = process.env
const client = new Instagram({ username : username, password : password});
await client.login();

let profile = await client.getProfile();
console.log(profile);


const url = "https://www.instagram.com/explore/tags/%EB%AA%A8%EC%9C%B0/"
const getHtml = async () => { 
    console.log(url)
    try { 
        return await axios.get(url); 
    } catch (error) {
        console.log(error)
    }
};

// getHtml()
//   .then(html => {
//     const $ = cheerio.load(html.data);
//     // const $bodyList = $("div.headline-list ul").children("li.section02");
//     // const data = ulList.filter(n => n.title);
//     return null
//   })


app.get('/', (req, res) => { 
  res.send('Hello World!') 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
