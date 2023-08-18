const queris = require("../query")
const pool = require("../db")


const getAllClass = (req, res) => {
    pool.query(queris.getClass, (error, results) => {
        if (error) throw error
        else return res.send(results.rows)
    })
}


const addClass = (req, res) => {
    const { className, status } = req.body
    pool.query(queris.addClass, [className, status], (error, results) => {
        if (error) throw error
        else return res.status(201).send("Class Added Successfully ... ")
    })
}


const getClassById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queris.getClassBy_id, [id], (error, result) => {
        if (error) throw error
        else return res.status(200).send(result.rows)
    })
}


const updateClassById = (req, res) => {
    const id = parseInt(req.params.id)
    const { className, status } = req.body
    pool.query(queris.getClassBy_id, [id], () => {
        pool.query(queris.updateClass, [className, status, id], (error, result) => {
            if (error) throw error
            else return res.status(201).send("Class Update Successsfully ... ")
        })
    })
}


const deleteClassById = (req,res) => {
    const id = parseInt(req.params.id)
    pool.query(queris.getClassBy_id, [id], () => {
        pool.query(queris.deleteClass, [id], (error, result) => {
            if(error) throw error
            else return res.status(200).send('Class Deleted Successsfully ... ')
        })
    })
}



module.exports = { getAllClass, addClass, getClassById, updateClassById, deleteClassById }