const express = require("express")
const {  uploadData, getData, updateData, uploadlnData, getlnData } = require("../controllers/blogController")
const router = express.Router()

router.get("/", (req,res,next) => {
    res.send("nothing")
})
router.post("/upload", uploadData)
router.post("/get", getData)
router.post("/update", updateData)
router.post("/uploadln", uploadlnData)
router.post("/getln", getlnData)
// router.post("/updateBlog", updateBlog)
// router.post("/readBlog", readBlog)

module.exports = router