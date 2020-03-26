import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ExpenseForm from './form';

class ExpenseManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      amount: '',
      date: '',
      expenses: [],
      index: -1,
    };


    this.handledescription = this.handledescription.bind(this);
    this.handleamount = this.handleamount.bind(this);
    this.handleForm = this.handleForm.bind(this);

    this.handleEdit = this.handleEdit.bind(this);
  }

  newTitle() {
    return this.state.expenses.length + 30;
  }

  updateExpense() {
    this
    .state
    .expenses
    .splice(

              {
                title: this.state.title,
                description: this.state.description,
                amount: this.state.amount,
                date: this.state.date,
              }
            );


            this.setState({
        index: -1,
      });
    }



  addExpense() {
    this.state.expenses.push(
      {
        id: this.newTitle(),
        description: this.state.description,
        amount: this.state.amount,
        date: Date.now(),
      }
    );
  }


  handledescription(description) {
    this.setState({
      description: description,
    });
  }

  handleamount(amount) {
    this.setState({
      amount: amount,
    });
  }


  handleForm() {
    if(this.state.index === -1) {
      this.addExpense();
    } else {
      this.updateExpense();
    }
    this.setState({
     title: '',
     description: '',
     amount: '',
     date: '',
   });
 }

 handleEdit(title) {
   var index = this.state.expenses.findIndex((expense) => { return expense.title === title });
   this.setState({
     index: index,
   });
   var expense = this.state.expenses[index];
   this.setState({
     title: expense.title,
     description: expense.description,
     amount: expense.amount,
     date: expense.date,
   });
 }

 render() {
   return (
     <div className="container">
       <div className="expense-manager">
         <div className="row">
           <Col md={6}>
             <ExpenseForm
               description={this.state.description}
               amount={this.state.amount}
               ondescription={this.handledescription}
               onamount={this.handleamount}
               onForm={this.handleForm}
               />
            </Col>
          </div>
          </div>
        </div>
    );
  }
}




export default ExpenseManager;
