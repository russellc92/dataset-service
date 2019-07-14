const asyncMiddleware = require('../utils/async-middleware')
const express = require('express');
const router = express.Router();


const getAllDatasetFiles = async (req, res, next) => {
    const { id } = req.params; 
    console.log('requested all dataset files: ', req.params)
    return res.status(200).send("hit files of dataset: " + id);
}

const getDatasetFile = async (req, res, next) => {
    console.log('requested dataset file: ', req.params)
    const { id, fid } = req.params; 
    return res.status(200).send("Dataset File: " + id);
}


router.get('/:id', asyncMiddleware(getAllDatasetFiles));
router.get('/:id/:fid', asyncMiddleware(getDatasetFile));

module.exports = router;