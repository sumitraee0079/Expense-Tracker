import React, { Component } from 'react'
import { DropDown } from 'react-dropdown';

    class SortExpense extends Component {

      constructor(props) {
        super(props)
        this.state = { expenses }
        this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
        this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
      }

      sortByPriceAsc() {
        this.setState(prevState => {
          this.state.expenses.sort((a, b) => (a.amount - b.amount))
      });
      }

      sortByPriceDesc() {
        this.setState(prevState => {
          this.state.expenses.sort((a, b) => (b.amount - a.amount))
      });
      }

      render() {
        return (
          <div>
            <button onClick={this.sortByPriceAsc}>
            Sort from Low to High
            </button>
            <button onClick={this.sortByPriceDesc}>
            Sort from High to Low
            </button>
            <div classname="Expense">
                  { this.state.expenses.map((expense, index) =>
                    <div key ={index}>
                    <th>Amount: { expense.amount }
                    const options = {this.state.amount}
                    const defaultOption = options[0];
                    <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;
                    </th>
                    </div>
          )}
          </div>
          </div>
        )
      }
    }
    export default SortExpense
