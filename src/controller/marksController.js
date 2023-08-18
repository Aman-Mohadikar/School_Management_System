const queris = require("../query")
const pool = require("../db")


const addMarks = (req, res) => {
    const { enrollment_id, subject_id, total_marks, obtained_marks, status } = req.body
    const credientials = [enrollment_id, subject_id, total_marks, obtained_marks, status]
    pool.query(queris.createMarks, credientials, (error, result) => {
        if (error) throw error
        else return res.status(201).send("Marks Added Successfully ... ")
    })
}


const getMarks = (req, res) => {
    pool.query(queris.getAllMarks, (error, result) => {
        if (error) throw error
        else return res.status(200).send(result.rows)
    })
}


const getMarksById = (req,res) => {
    const id = parseInt(req.params.id)
    pool.query(queris.getMarksBy_Id, [id], (error, result) => {
        if(error) throw error
        else return res.status(200).send(result.rows)
    })
}


const updateMarksById = (req,res) => {
    const id = parseInt(req.params.id)
    const {obtained_marks, status} = req.body
    pool.query(queris.getMarksBy_Id, [id], () => {
        pool.query(queris.updateMarks, [obtained_marks, status, id], (error, result) => {
            if(error) throw error
            else return res.status(201).send("Marks Updated Successfully ... ")
        })
    })
}


const deleteMarksById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queris.getMarksBy_Id, [id], () => {
        pool.query(queris.deleteMarks, [id], (error, result) => {
            if(error) throw error
            else return res.status(200).send("Marks Deleted Successfully ... ")
        })
    })
}


module.exports = { addMarks, getMarks, getMarksById, updateMarksById, deleteMarksById }