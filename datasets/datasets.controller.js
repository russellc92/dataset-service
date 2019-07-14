const asyncMiddleware = require('../utils/async-middleware')
const express = require('express');
const router = express.Router();


const getAllDatasets = async (req, res, next) => {
    console.log('requested all datasets')
    return res.status(200).send("hitt");
}

const getDataset = async (req, res, next) => {
    const { id } = req.params; 
    return res.status(200).send("Dataset: " + id);
}


router.get('/', asyncMiddleware(getAllDatasets));
router.get('/:id', asyncMiddleware(getDataset));

module.exports = router;