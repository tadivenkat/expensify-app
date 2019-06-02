// Return subset of expenses applying the filters.

export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        let startDateMatch = false;
        let endDateMatch = false;
        const textMatch = expense.description.toLowerCase().indexOf(text.toLowerCase()) >= 0;
        if (!!startDate) {
            if (!!expense.createdAt) {
                startDateMatch = startDate <= expense.createdAt;
            } else {
                startDateMatch = true;
            }
        } else {
            startDateMatch = true;
        }
        if (!!endDate) {
            if (!!expense.createdAt) {
                endDateMatch = endDate >= expense.createdAt;
            } else {
                endDateMatch = true;
            }
        } else {
            endDateMatch = true;
        }
        return startDateMatch && endDateMatch && textMatch;
    }).sort((expense1, expense2) => {
        switch (sortBy) {
            case 'amount':
                return expense1.amount - expense2.amount;
            case 'date':
                return expense1.createdAt - expense2.createdAt;
            default:
                return expense1.amount - expense2.amount;
        }
    });
};