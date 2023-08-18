const express = require("express")
const router = express.Router()
const subjectController = require("../controller/subjectController")

router.post("/addSubject", subjectController.addSubject)
router.get("/getAllSubjects", subjectController.getAllSubjects)
router.get("/getSubjectById/:id", subjectController.getSubjectById)
router.put("/updateSubjectById/:id", subjectController.updateSubjectById)
router.delete("/deleteSubjectById/:id", subjectController.deleteSubjectById)

module.exports = router