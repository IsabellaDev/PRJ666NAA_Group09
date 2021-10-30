const express = require('express')
const router = express.Router()
const FAQ = require('../models/FaqModel')

// Get all
router.get('/', async (req, res) => {
    try {
        const faq = await FAQ.find().sort( { category: 1 } )
        res.json(faq)
        console.log(faq);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get one
router.get('/:id', getFaq, (req, res) => {
    res.json(res.faq)
})



// Create one
router.post('/', async (req, res) => {
    const faq = new FAQ({
        
        category: req.body.category,
        articleTitle: req.body.articleTitle,
        body: req.body.body
    })

    try{
        const newFAQ = await faq.save()
        res.status(201).json(newFAQ)
    } catch (err) {
        res.status(400).json({ message : err.message })
    }
})

// Update one
router.patch('/:id', getFaq, async (req, res) => {
    if (req.body.articleTitle != null) {
        res.article.articleTitle = req.body.articleTitle
    }
    try {
        const updatedFaq = await res.faq.save()
        res.json(updatedFaq)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
// Delete one
router.delete('/:id', getFaq, async (req, res) => {
    try {
        await res.faq.remove()
        res.json({ message: 'Deleted FAQ article'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getFaq(req, res, next) {
    let faq
    try {
        faq = await FAQ.findById(req.params.id)
        if (faq == null){
            return res.status(404).json({ message: 'Cannot find any faq' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.faq = faq
    next()
}

module.exports = router