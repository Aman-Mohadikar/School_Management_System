const queris = require("../query")
const pool = require("../db")


const addEnrollment = (req, res) => {
    const { section_id, student_id, status } = req.body
    pool.query(queris.checkEnrollment, [section_id, student_id, status], (error, result) => {
        if (error) throw error
        else return res.status(201).send("Enrollment Created Successfully ... ")
    })
}


const getAllEnrollments = (req, res) => {
    pool.query(queris.getEnrollments, (error, result) => {
        if (error) throw error
        else return res.status(200).send(result.rows)
    })
}


const getEnrollmentById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queris.getEnrollmentBy_Id, [id], (error, result) => {
        if (error) throw error
        else return res.status(200).send(result.rows)
    })
}


const updateEnrollmentById = (req, res) => {
    const { section_id, student_id, status } = req.body
    const id = parseInt(req.params.id)
    pool.query(queris.getEnrollmentBy_Id, [id], () => {
        pool.query(queris.updateEnrollment, [section_id, student_id, status, id], (error, result) => {
            if (error) throw error
            else return res.status(201).send("Enrollment Updated Successfully ... ")
        })
    })
}


const deleteEnrollmentById = (req,res) => {
    const id = parseInt(req.params.id)
    pool.query(queris.getEnrollmentBy_Id, [id], () => {
        pool.query(queris.deleteEnrollment, [id], (error, result) => {
            if(error) throw error
            else return res.status(200).send("Enrollment Deleted Successfully ... ")
        })
    })
}


module.exports = { addEnrollment, getAllEnrollments, getEnrollmentById, updateEnrollmentById, deleteEnrollmentById }