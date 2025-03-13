const express = require('express');
const expenseController = require('../controllers/expenseController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/new', authMiddleware,expenseController.createExpense);
router.get('/allexpenses', authMiddleware, expenseController.getExpenses);

module.exports = router;