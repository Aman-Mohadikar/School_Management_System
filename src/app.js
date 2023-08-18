const express = require("express")
const classRoute = require("./routes/classRoute")
const sectionRoute = require("./routes/sectionRoute")
const studentRoute = require("./routes/studentRoute")
const enrollmentRoute = require("./routes/enrollmentRoute")
const subjectRoute = require("./routes/subjectRoute")
const marksRoute = require("./routes/marksRoute")
const app = express()
require('dotenv').config();

const port = process.env.PORT || 3000

app.use(express.json())

app.use("/api/school/class", classRoute)
app.use("/api/school/section", sectionRoute)
app.use("/api/school/students", studentRoute)
app.use("/api/school/enrollment", enrollmentRoute)
app.use("/api/school/subject", subjectRoute)
app.use("/api/school/marks", marksRoute)


app.listen(port, () => {
    console.log(`This app is running on port ${port}`)
})