import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
        console.log(moment(date).valueOf());
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
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        autoFocus 
                        value={this.state.description} 
                        onChange={this.onDescriptionChange} />
                    <input 
                        type="number" 
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}/>
                    <textarea 
                        name="note" 
                        placeholder="Add a Note for this Expense"
                        value={this.state.note}
                        onChange={this.onNoteChange}></textarea>
                    <DatePicker 
                        todayButton={"Today"}
                        selected={new Date(this.state.createdAt)} 
                        onChange={this.onDateChange}
                        title="Created At"
                        dateFormat="dd-MMM-yyyy"/>
                    <input type="submit" value="Save"/>
                </form>                                        
            </div>
        );
    }
}

export default ExpenseForm;