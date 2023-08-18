const queris = require("../query")
const pool = require("../db")



const addStudents = (req, res) => {
    const { first_name, middle_name, last_name, dob, gender, address, nationality, parent_guardian_name, parent_guardian_phone, roll_number, emergency_contact_number, status } = req.body
    const credientials = [first_name, middle_name, last_name, dob, gender, address, nationality, parent_guardian_name, parent_guardian_phone, roll_number, emergency_contact_number, status]
    pool.query(queris.addStudents, credientials, (error, result) => {
        if (error) throw error
        else return res.status(201).send("Student Created Successfully ... ")
    })
}



const getAllStudents = (req, res) => {
    pool.query(queris.getStudents, (error, result) => {
        if (error) throw error
        else return res.status(200).send(result.rows)
    })
}


const getStudentById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queris.getStudentBy_Id, [id], (error, result) => {
        if (error) throw error
        else return res.status(200).send(result.rows)
    })
}


const updateStudentById = (req, res) => {
    const id = parseInt(req.params.id)
    const { first_name, last_name, dob, address, roll_number, status } = req.body
    const credientials = [first_name, last_name, dob, address, roll_number, status, id]
    pool.query(queris.getStudentBy_Id, [id], () => {
        pool.query(queris.updateStudent, credientials, (error, result) => {
            if (error) throw error
            else return res.status(201).send("Student Updated Successfully ... ")
        })
    })
}

const updateSectionById = (req, res) => {
    const id = parseInt(req.params.id)
    const { class_id, section_name, status } = req.body
    pool.query(queris.getSectionBy_Id, [id], () => {
        pool.query(queris.updateSection, [class_id, section_name, status, id], (error, result) => {
            if (error) throw error
            else return res.status(201).send("Section Updated Successfully ... ")
        })
    })
}


const deleteStudentById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queris.getStudentBy_Id, [id], () => {
        pool.query(queris.deleteStudent, [id], (error, result) => {
            if (error) throw error
            else return res.status(200).send("Student Deleted Successfully ... ")
        })
    })
}



module.exports = { addStudents, getAllStudents, getStudentById, deleteStudentById, updateStudentById }