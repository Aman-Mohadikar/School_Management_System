const queris = require("../query")
const pool = require("../db")


const addSections = (req, res) => {
    const { class_id, section_name, status } = req.body
    pool.query(queris.createSection, [class_id, section_name, status], (error, result) => {
        if (error) throw error
        else return res.status(201).send("Section Added Successfully ... ")
    })
}


const getAllSections = (req, res) => {
    pool.query(queris.getSections, (error, result) => {
        if (error) throw error
        else return res.status(200).send(result.rows)
    })
}


const getSectionById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queris.getSectionBy_Id, [id], (error, result) => {
        if (error) throw error
        else return res.status(200).send(result.rows)
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


const deleteSectionById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queris.getSectionBy_Id, [id], () => {
        pool.query(queris.deleteSection, [id], (error, result) => {
            if (error) throw error
            else return res.status(200).send("Section Deleted Successfully ... ")
        })
    })
}


module.exports = { addSections, getAllSections, getSectionById, updateSectionById, deleteSectionById }