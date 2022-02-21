const Instagram = require('instagram-web-api')
const axios = require('axios')
const dotenv = require("dotenv").config();
const express = require('express'); 
const app = express() 
const port = 4000 

const username = process.env.USERNAME
const password = process.env.PASSWORD

const client = new Instagram({ username: username, password: password })

const contentsName = "모윰흡착볼"

;(async () => {
  await client.login()

  const search = await client.getPhotosByHashtag({ hashtag: contentsName })
  const mediaCount = search.hashtag.edge_hashtag_to_media.count
  const mediaList = search.hashtag.edge_hashtag_to_media.edges

  totalLike = 0
  totalComment = 0
  for(var i = 0; i<mediaList.length; i++) {
    totalLike += mediaList[i].node.edge_media_preview_like.count
    totalComment += mediaList[i].node.edge_media_to_comment.count
  }

  console.log("mediaCount: " + mediaCount)
  console.log("totalLike: " + totalLike)
  console.log("totalComment: " + totalComment)
  // console.log(search.hashtag.edge_hashtag_to_media.edges[0].node.edge_media_to_comment)
})()



// app.get('/', (req, res) => { 
//   res.send('Hello World!') 
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// }) 

