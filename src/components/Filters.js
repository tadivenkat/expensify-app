import React from 'react';
import {connect} from 'react-redux';
import {setTextFilterAction, setStartDateFilterAction, setEndDateFilterAction} from '../actions/filters';
import {setSortByFilterAction} from '../actions/filters';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


export class Filters extends React.Component {
    setTextFilterAction = (event) => {
        this.props.setTextFilterAction(event.target.value);
    }
    setStartDateFilterAction = (date) => {
        this.props.setStartDateFilterAction(date);
    }
    setEndDateFilterAction = (date) => {
        this.props.setEndDateFilterAction(date);
    }
    setSortByFilterAction = (event) => {
        this.props.setSortByFilterAction(event.target.value);
    }
    render() {
        const filters = this.props.filters;
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group-item">
                        <input 
                            type="text" 
                            name="TextFilter" 
                            placeholder="Search Expenses"
                            value={filters.text} 
                            onChange={this.setTextFilterAction}/>
                    </div>
                    <div className="input-group-item">
                                <select value={filters.sortBy} onChange={this.setSortByFilterAction}>
                                    <option value="amount">Amount</option>
                                    <option value="date">Date</option>
                                </select>
                    </div>
                    <div className="input-group-item">
                                <DatePicker
                                    todayButton={"Today"}
                                    selectsStart 
                                    selected={moment(filters.startDate).valueOf()}
                                    startDate={moment(filters.startDate).valueOf()}
                                    endDate={moment(filters.endDate).valueOf()} 
                                    onChange={this.setStartDateFilterAction}
                                    title="Start Date"
                                    dateFormat="dd-MMM-yyyy"/>
                    </div>
                    <div className="input-group-item">
                                <DatePicker
                                    todayButton={"Today"}
                                    selectsEnd
                                    selected={moment(filters.endDate).valueOf()} 
                                    onChange={this.setEndDateFilterAction}
                                    title="End Date"
                                    dateFormat="dd-MMM-yyyy"/>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        setTextFilterAction: (text) => dispatch(setTextFilterAction(text)),
        setStartDateFilterAction: (date) => dispatch(setStartDateFilterAction(moment(date).valueOf())),
        setEndDateFilterAction: (date) => dispatch(setEndDateFilterAction(moment(date).valueOf())),
        setSortByFilterAction: (sortBy) => dispatch(setSortByFilterAction(sortBy))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);