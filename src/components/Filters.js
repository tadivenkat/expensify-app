import React from 'react';
import {connect} from 'react-redux';
import {setTextFilterAction, setStartDateFilterAction, setEndDateFilterAction} from '../actions/filters';
import {setSortByFilterAction} from '../actions/filters';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


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
            <DatePicker
                todayButton={"Today"}
                selectsStart 
                selected={moment(filters.startDate).valueOf()}
                startDate={moment(filters.startDate).valueOf()}
                endDate={moment(filters.endDate).valueOf()} 
                onChange={(date) => props.dispatch(setStartDateFilterAction(moment(date).valueOf()))}
                title="Start Date"
                dateFormat="dd-MMM-yyyy"/>
            <DatePicker
                todayButton={"Today"}
                selectsEnd
                selected={moment(filters.endDate).valueOf()} 
                onChange={(date) => props.dispatch(setEndDateFilterAction(moment(date).valueOf()))}
                title="End Date"
                dateFormat="dd-MMM-yyyy"/>
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