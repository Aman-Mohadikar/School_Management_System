const express = require("express")
const router = express.Router()
const studentController = require("../controller/studentController")


router.post("/addStudent", studentController.addStudents)
router.get("/getAllStudents", studentController.getAllStudents)
router.get("/getStudentById/:id", studentController.getStudentById)
router.put("/updateStudentById/:id", studentController.updateStudentById)
router.delete("/deleteStudentById/:id", studentController.deleteStudentById)


module.exports = router