import React from 'react';
import {connect} from 'react-redux';
import {setTextFilterAction} from '../actions/filters';
import {setSortByFilterAction} from '../actions/filters';

const Filters = (props) => {
    const filters = props.filters;
    return (
        <div>
            <input 
                type="text" 
                name="TextFilter" 
                placeholder="Filter by text"
                value={filters.text} 
                onChange={(event) => props.dispatch(setTextFilterAction(event.target.value))}/>
            <select value={filters.sortBy} onChange={(event) => props.dispatch(setSortByFilterAction(event.target.value))}>
                <option value="amount">Amount</option>
                <option value="date">Date</option>
            </select>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(Filters);