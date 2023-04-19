// Your server should incorporate at least one table that, at minimum, includes:
// *id* - A unique number for each item
// *item_name* - string - the name of the transaction (ie: income, savings, cat food, etc.)
// *amount* -number - the amount of the transaction
// *date* - string - the date should be a simple string. As a bonus activity, use the date object and date input field and format it to be human-readable
// *from* - string - who this transaction was with (ie. employer, bank, pet store, grocery store, etc)
// *category* - string - what category does this fall into (income, savings, pets, food, etc)

module.exports = [
    {
        name: "Weekly Pay",
        amount: 600,
        date: "04/17/2023",
        from: "employer",
        category: "income"
    },
    {
        name: "Groceries",
        amount: -100,
        date: "04/17/2023",
        from: "grocery store",
        category: "food"
    },
    {
        name: " Weekly Savings",
        amount: -100,
        date: "04/17/2023",
        from: "bank",
        category: "savings"
    },
    {
        name: "Gas Budget",
        amount: -60,
        date: "04/17/2023",
        from: "gas station",
        category: "travel"
    },
    {
        name: "Rent budget",
        amount: -300,
        date: "04/17/2023",
        from: "income",
        category: "rent"
    },
];