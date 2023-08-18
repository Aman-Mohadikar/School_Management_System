const express = require("express")
const router = express.Router()
const marksController = require("../controller/marksController")

router.post("/addMarks", marksController.addMarks)
router.get("/getAllMarks", marksController.getMarks)
router.get("/getMarksById/:id", marksController.getMarksById)
router.put("/updateMarksById/:id", marksController.updateMarksById)
router.delete("/deleteMarksById/:id", marksController.deleteMarksById)

module.exports = router