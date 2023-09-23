const express = require("express")
const {  uploadData, getData } = require("../controllers/blogController")
const router = express.Router()

router.get("/", (req,res,next) => {
    res.send("nothing")
})
router.post("/upload", uploadData)
router.post("/get", getData)
// router.post("/updateBlog", updateBlog)
// router.post("/readBlog", readBlog)

module.exports = router