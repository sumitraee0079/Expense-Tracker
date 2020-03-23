import React, { Component } from 'react';

import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { year: null, month: null, day: null };
    }

    render() {
        return (
            <div>
                <YearPicker
                    defaultValue={'select year'}
                   
                    start={2012}
                   
                    end={2020}
                    
                    reverse
                   
                    required={true}
                   
                    disabled={true}
                    
                    value={this.state.year}
                    
                    onChange={(year) => {
                        this.setState({ year });
                        console.log(year);
                    }}
                    id={'year'}
                    name={'year'}
                    classes={'classes'}
                    optionClasses={'option classes'}
                />
                <MonthPicker
                    defaultValue={'select month'}
                    numeric
                    short
                    caps
                    endYearGiven
                    
                    year={this.state.year}
                    
                    required={true}
                  
                    disabled={true}
                   
                    value={this.state.month}
                    
                    onChange={(month) => {
                        this.setState({ month });
                        console.log(month);
                    }}
                    id={'month'}
                    name={'month'}
                    classes={'classes'}
                    optionClasses={'option classes'}
                />
                <DayPicker
                    defaultValue={'select day'}
                   
                    year={this.state.year}
                   
                    month={this.state.month}
                   
                    endYearGiven
                    
                    required={true}
                    
                    disabled={true}
                    
                    value={this.state.day}
                   
                    onChange={(day) => {
                        this.setState({ day });
                        console.log(day);
                    }}
                    id={'day'}
                    name={'day'}
                    classes={'classes'}
                    optionClasses={'option classes'}
                />
            </div>
        );
    }
}

export default App;
