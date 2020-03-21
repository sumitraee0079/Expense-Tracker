import React, { Component } from 'react';
import { Expense_Title} from './table_expense';

class App extends Component {

    state = {
        search : ""
    }

    renderTitle = Title =>{
        const {search} = this.state;
        var title = expenseTitle.toLowerCase()


    onchange = e =>{
        this.setState({ search : e.target.value });
    }

    render() {

        const {search} = this.state;
        const expenseTitle = Expense_Title.filter( title =>{
            return expenseTitle.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            <Input label="Search Title" icon="search" onChange={this.onchange}/>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        {
                            expenseTitle.map( title =>{
                                return this.renderTitle(title)
                            })
                        }
                    </div>
                </div>
            </main>
            </div>
        );
    }
}

export default App;
