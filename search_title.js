import React, { Component } from 'react';

class SearchTitle extends Component {

    state = {
        Expense_Title = '',
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
        const expenseTitle = {this.state.Expense_Title}.filter( title =>{
            return expenseTitle.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })

        return (
            <div>
                <div>
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
            </div>
        );
    }
}

export default SearchTitle;
