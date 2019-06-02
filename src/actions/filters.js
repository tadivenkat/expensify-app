
export const setTextFilterAction = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        payload: text
    }
};

export const setSortByFilterAction = (sortBy = '') => {
    return {
        type: 'SET_SORT_BY',
        payload: sortBy
    };
}

export const setStartDateFilterAction = (startDate) => {
    return {
        type: 'SET_START_DATE',
        payload: startDate
    };
}

export const setEndDateFilterAction = (endDate) => {
    return {
        type: 'SET_END_DATE',
        payload: endDate
    }
}