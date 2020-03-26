import React, { Component } from "react";
import expenses from './App';
import { DropDown } from 'react-dropdown';
import { Button } from 'react-bootstrap';
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';
import { Redirect } from "react-router-dom";

/*class Logout extends Component {
  state: {
    navigate: false
  };

  logout = () => {
    localStorage.clear("token");
    this.setState({ navigate: true});
  } ;
  render()
  {
    const { navigate } = this.state;
	if (navigate) {
      return <Redirect to="/login" push={true} />;
    }

	return <Button onclick={this.logout}>Log Out</Button>;

  }
}*/




export default class SortExpense extends Component {

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
	componentWillMount = () => {
      	this.setState({
         expenses: this.props.content
      })
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
            <div classname="SortExpense">
                  { this.state.expenses.map((expense, index) =>
                    <div key ={index}>
                    <th>Amount: <select id = "prices">
				<option>{ expense.amount } </option>
			</select>
                    </th>
                    </div>
          )}
          </div>
          </div>
        )
      }
    }

/*export default class SearchTitle extends React.Component {
    state = {
        initialItems: [],
        items: []
    }

    filterList = (event) => {
      let items = this.state.initialItems;
      items = items.filter((item) => {
        return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      });
      this.setState({items: items});
    }

    componentWillMount = () => {
      this.setState({
          initialItems: this.props.content,
          items: this.props.content
      })
    }

    render() {
      return (
        <div>
          <form>
                <input type="text" placeholder="Search" onChange={this.filterList}/>
          </form>
          <div>
            {
                this.state.items.map(function(item) {
                    return <div key={item}>{item}</div>
                })
            }
            </div>
        </div>
      );
    }
};*/
