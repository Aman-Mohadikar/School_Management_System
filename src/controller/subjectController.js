const queris = require("../query")
const pool = require("../db")


const addSubject = (req, res) => {
    const { subject_name, status } = req.body
    pool.query(queris.createSubject, [subject_name, status], (error, result) => {
        if (error) throw error
        else return res.status(201).send("Subject Added Successfullly ... ")
    })
}


const getAllSubjects = (req, res) => {
    pool.query(queris.getSubjects, (error, result) => {
        if (error) throw error
        else return res.status(200).send(result.rows)
    })
}


const getSubjectById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queris.getSubjectBy_Id, [id], (error, result) => {
        if (error) throw error
        else return res.status(200).send(result.rows)
    })
}


const updateSubjectById = (req, res) => {
    const id = parseInt(req.params.id)
    const { subject_name, status } = req.body
    pool.query(queris.getSubjectBy_Id, [id], () => {
        pool.query(queris.updateSubject, [subject_name, status, id], (error, result) => {
            if (error) throw error
            else return res.status(201).send("Subject Updated Seccessfully ... ")
        })
    })
}


const deleteSubjectById = (req,res) => {
    const id = parseInt(req.params.id)
    pool.query(queris.getSubjectBy_Id, [id], () => {
        pool.query(queris.deleteSubject, [id], (error, result) => {
            if(error) throw error
            else return res.status(200).send("Subject Deleted Successfully .... ")
        })
    })
}


module.exports = { addSubject, getAllSubjects, getSubjectById, updateSubjectById, deleteSubjectById }