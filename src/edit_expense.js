import React, { Component } from 'react';

class UpdateExpense extends Component {
    constructor(props){
      super(props);
      this.state = {
          tableContent: []
      };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      let randomID = Math.floor(Math.random() * 999999);

      let newTab = this.state.tableContent;
      newTab.push({
        key: randomID,
        title: "",
        amount: "" 
      });

      this.setState({
        tableContent: newTab 
      });


    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
    return (
      <section className="App">
          <header>
              <h1>Expense Tracker</h1>
          </header>

          <form>
              <label htmlFor="title">Title</label>
            <input type="text" name="title" onChange={this.handleChange}/>

              <label htmlFor="amount">Amount</label>
              <input type="text" name="amount" onChange={this.handleChange}/>

            <button type="button" id="add" onClick={this.handleClick}>Update expense</button>
          </form>

          <section>
            <h1>Expenses</h1>
            <table id="ExpenseTable">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Update Expense</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tableContent.map((item) => 
                  <tr key={item.key}>
                    <td>{item.title}</td>
                    <td>{item.amount}</td>
                    <td>
                      <span>Updated</span>
                    </td>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        </section>
    );
  }
}

export default UpdateExpense
