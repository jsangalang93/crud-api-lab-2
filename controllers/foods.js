const express = require('express')
const router = express.Router();
const Food = require ('../models/food.js')

router.post('/', async (req, res) => {
    try {
    const createdFood = await Food.create(req.body)
    res.status(201).json(createdFood)
    } catch (error){
        res.status(500).json({error:error.message})
    }
})

router.get('/', async (req, res) => {
    try {
        const foundFoods = await Food.find({})
        res.status(200).json(foundFoods)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.get('/:foodId', async (req, res) => {
    try { 
        const foundFood = await Food.findById(req.params.foodId)
        res.status(200).json(foundFood)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.delete('/:foodId', async (req, res) => {
    try {
        const deletedFood = await Food.findByIdAndDelete(req.params.foodId)
        res.status(200).json(deletedFood)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
})

router.put('/:foodId', async (req, res) => {
    try {
        const updatedFood = await Food.findByIdAndUpdate(req.params.foodId, req.body, {new: true})
        res.status(200).json(updatedFood)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
})


module.exports = router;