const express = require("express")
const classController = require("../controller/classController")
const router = express.Router()



router.get("/getAllClass", classController.getAllClass)
router.post("/addClass", classController.addClass)
router.get("/getClassById/:id", classController.getClassById)
router.put("/updateClassById/:id", classController.updateClassById)
router.delete("/deleteClassById/:id", classController.deleteClassById)

module.exports = router