import React, { Component } from 'react';

class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>Add a new expense to the table:</h3>  
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="title">
          Title:
          <input id="title" value={this.props.newTitle} 
            type="text" name="title"
            onChange={this.props.handleInputChange} />
          </label>
          <label htmlFor="description">
          Description:
          <input id="desc" value={this.props.newDescription} 
            type="text" name="description"
            onChange={this.props.handleInputChange} />
          </label>
          <label htmlFor="amount">
          Amount:
          <input id="amount" value={this.props.newAmount}
            type="text" name="amount"
            onChange={this.props.handleInputChange} />
          </label>
           <label htmlFor="date">
          Date:
          <input id="date" value={this.props.newDate}
            type="text" name="date"
            onChange={this.props.handleInputChange} />
          </label>
          <button type="submit" value="Submit">Add Expense</button>
        </form>
      </div>
    );
  }
}

export default Form;
