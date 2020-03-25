import React from 'react';
import axios from 'axios';
import ExpenseList from './table_expense';

class AddExpense extends React.Component {
 constructor(props) {
  super(props)
         this.state = {
          ExpenseTitle: '',
          description: '',
          amount:'',
          date:''
        }
        this.handleExpenseTitle = this.handleExpenseTitle.bind(this);
        this.handledescription = this.handledescription.bind(this);
        this.handleamount = this.handleamount.bind(this);
        this.handledate = this.handledate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

      }
  handleExpenseTitleChange(e) {
    this.setState({ExpenseTitle: e.target.value})
  }
  handledescriptionChange(e) {
    this.setState({description: e.target.value})
  }
  handleamountChange(e) {
    this.setState({amount: e.target.value})
  }
  handledateChange(e) {
    this.setState({date: e.target.value})
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/`)
      .then(res => {
        const expense = res.data;
        this.setState({ expense });
      })
  }

  onSubmit(e) {
      const title = {
        ExpenseTitle: this.state.ExpenseTitle,
        description: this.state.description,
        amount: this.state.amount,
        date: this.state.date
      }

      axios.post('http://localhost:8000', title)
      .then(res => {
          const expense = res.data;
          this.setState({ expense });
        })

  }
  render() {
    return (
    <div>
       <form onSubmit={this.onSubmit}>
       <label>Expense Title: </label>
        <input type="text" name="title" onChange={this.handleExpenseTitleChange}/>
        <label>Description</label>
        <input type="text" name="desc" onChange={this.handledescriptionChange}/>
        <label>Amount</label>
        <input type="text" name="amount" onChange={this.handleamountChange}/>
        <label>Date</label>
        <input type="text" name="date" onChange={this.handledateChange}/>
        <input type="submit" value="Add Expense" />
      </form>
    </div>
  );
  }
}
export default AddExpense;
