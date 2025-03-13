const expense = require('../models/expenseModel');

exports.createExpense = async (req, res) => {
    const { amount, description, category, date } = req.body;
    const user = req.userId;
    if (amount && description && category && date) {
        try {
            const newExpense = new expense({
                amount,
                description,
                category,
                date,
                user,
            })
            await newExpense.save();
            res.status(201).json(newExpense);

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error" });
        }
    }
    else {
        res.status(400).json({ message: "All fields are required" });
    }
}

exports.getExpenses = async (req, res) => {
    const user = req.userId;
    try {
        const expenses = await expense.find({ user }).sort({ date: -1 });
        res.status(200).json(expenses);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error" });
    }
}