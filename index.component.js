import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {expense: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/expense')
        .then(response => {
          this.setState({ expense: response.data });
        })
    }
    tabRow(){
      return this.state.expense.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Expense List</h3>
          <table>
            <thead>
              <tr>
                <th>Expense Title</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }
