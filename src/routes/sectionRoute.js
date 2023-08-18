const express = require("express")
const sectionController = require("../controller/sectionController")
const router = express.Router()


router.post("/addSections", sectionController.addSections)
router.get("/getAllSections", sectionController.getAllSections)
router.get("/getSectionById/:id", sectionController.getSectionById)
router.put("/updateSectionById/:id", sectionController.updateSectionById)
router.delete("/deleteSectionById/:id", sectionController.deleteSectionById)


module.exports = router