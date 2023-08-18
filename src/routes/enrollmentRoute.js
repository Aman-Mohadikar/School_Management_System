const express = require("express")
const router = express.Router()
const enrollmentController = require("../controller/enrollmentController")

router.post("/createEnrollment", enrollmentController.addEnrollment)
router.get("/getAllEnrollments", enrollmentController.getAllEnrollments)
router.get("/getEnrollmentById/:id", enrollmentController.getEnrollmentById)
router.put("/updateEnrollmentById/:id", enrollmentController.updateEnrollmentById)
router.delete("/deleteEnrollmentById/:id", enrollmentController.deleteEnrollmentById)

module.exports = router