import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';


class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.expense ? props.expense.id : '',
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? props.expense.amount / 100 : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt).valueOf() : moment().valueOf(),
            error: ''
        };
    };
    
    onDescriptionChange = (event) => {
        const description = event.target.value;
        this.setState((currentState) => {
            return {
                description
            };
        });
    };

    onNoteChange = (event) => {
        const note = event.target.value;
        this.setState((currentState) => {
            return {
                note
            };
        });
    };

    onAmountChange = (event) => {
        const amount = event.target.value;
        if (!amount || amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState((currentState) => {
                return {
                    amount
                };
            });
        }
    }

    onDateChange = (date) => {
        this.setState((currentState) => {
            return {
                createdAt: moment(date).valueOf()
            };
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => {
               return {
                   error: 'Please enter description and amount' 
               };
            });
        } else {
            this.setState(() => {
                return {
                    error: '' 
                };
            });
            // Construct expense object and set it on props to make it accessible to the parent component
            this.props.onSubmit({
                id: this.state.id,
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                note: this.state.note,
                createdAt: this.state.createdAt
            });
        }
    }
    render() {
        return (
            <form className="form" onSubmit={this.onFormSubmit}>
                {this.state.error && <p className="bg-danger text-white">{this.state.error}</p>}
                <div className="form-group">
                    <label for="description">Description</label>
                    <input 
                        type="text"
                        id="description"
                        className="form-control"
                        placeholder="Enter Description" 
                        autoFocus 
                        value={this.state.description} 
                        onChange={this.onDescriptionChange} />
                </div>
                <div className="form-group">
                    <label for="amount">Amount</label>
                    <input
                        id="amount"
                        type="number"
                        className="form-control" 
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}/>
                </div>
                <div className="form-group">
                    <label for="note">Note</label>
                    <textarea 
                        id="note"
                        name="note"
                        className="form-control" 
                        placeholder="Add a Note for this Expense"
                        rows="7"
                        value={this.state.note}
                        onChange={this.onNoteChange}>
                    </textarea>
                </div>
                <div className="form-group">
                    <label for="createdAt">Created At</label>
                    <DatePicker
                        id="createdAt"
                        name="createdAt"
                        className="form-control" 
                        todayButton={"Today"}
                        selected={new Date(this.state.createdAt)} 
                        onChange={this.onDateChange}
                        title="Created At"
                        dateFormat="dd-MMM-yyyy"/>
                </div>
                <div>
                    <button onClick={this.onFormSubmit} className="btn btn-primary">Save Expense</button>
                </div>                    
            </form>                                        
        );
    }
}

export default ExpenseForm;