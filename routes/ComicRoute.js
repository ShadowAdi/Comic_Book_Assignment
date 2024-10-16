const express = require("express")
const {CreateComic,GetAllComics,DeleteComic,GetComic,UpdateComic}=require("../controllers/ComicController")
const validateComicInput=require("../middleware/ValidationMiddleware")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hii")
})

router.post("/addComic",validateComicInput,CreateComic)
router.get("/getComic/:id",GetComic)
router.get("/getAllComics",GetAllComics)
router.delete("/deleteComic/:id",DeleteComic)
router.put("/updateComic/:id",UpdateComic)


module.exports=router