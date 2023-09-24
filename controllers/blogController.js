
const { json } = require('body-parser')
const Data = require('../models/blog')
const uploadData =
    async (req, res, next) => {
  try {
    // const {resp, code} = await createBlogApi(req.body.blog)
    // console.log(req.body)
    
    await Data.create(req.body)

    res.status(200)
    res.json({
      "created": true
    })
  } catch (error) {
    console.log(error)
   
    res.status(401)
    res.json({created: false, error: 'Unable to create blog.'})
  }
}

const updateData =
    async (req, res, next) => {
  try {
    // const {resp, code} = await createBlogApi(req.body.blog)
    // console.log(req.body)
    var check = await Data.find({title: req.body.title, entrydate: req.body.entrydate}).exec()
    if(check[0].patti2.length != 0){
      res.status(401)
      res.json({created: false, error: 'Unable to update blog.'})
    } else{
      await Data.updateOne({title: req.body.title, entrydate: req.body.entrydate}, req.body.updates)

      res.status(200)
      res.json({
        "created": true
      })
    }

  } catch (error) {
    console.log(error)
   
    res.status(401)
    res.json({created: false, error: 'Unable to update blog.'})
  }
}

const getData =
    async (req, res, next) => {
  try {
   var resp = await Data.find(req.body).exec()

   res.status(200)
   res.json(resp)
  } catch (error) {
    console.log(error)
    res.status(400)
    res.json({deleted: false, error: 'Unable to delete blog.'})
  }
}

// const updateBlog =
//     async (req, res, next) => {
//   try {
//     const {resp, code} = await updateBlogApi(req.body._id, req.body.updates)
//     res.status(code)
//     res.json(resp)
//   } catch (error) {
//     res.status(401)
//     res.json({updated: false, error: 'Unable to update blog.'})
//   }
// }

// const readBlog =
//     async (req, res, next) => {
//   try {
//     const {resp, code} = await readBlogApi(req.body)
//     res.status(code)
//     res.json(resp)
//   } catch (error) {
//     res.status(401)
//     res.json({fetched: false, error: 'Unable to read blogs.'})
//   }
// }



                              module.exports = {
uploadData, getData, updateData
}