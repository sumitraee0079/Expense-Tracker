import React from 'react';
import DropdownDate from 'react-dropdown-date';

const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: null, selectedDate: '2012-11-15' };
    }

    render() {
        return (
            <div>

                <DropdownDate
                    startDate={
                        '2012-01-01'
                    }
                    endDate={
                        '2012-12-31'
                    }
                    selectedDate={
                        this.state.selectedDate
                    }
                    order={
                        ['year', 'month', 'day']
                    }
                    onMonthChange={(month) => {
                        console.log(month);
                    }}
                    onDayChange={(day) => {
                        console.log(day);
                    }}
                    onYearChange={(year) => {
                        console.log(year);
                    }}
                    onDateChange={(date) => {
                        console.log(date);
                        this.setState({ date: date, selectedDate: formatDate(date) });
                    }}
                    ids={
                        {
                            year: 'select-year',
                            month: 'select-month',
                            day: 'select-day'
                        }
                    }
                    names={
                        {
                            year: 'year',
                            month: 'month',
                            day: 'day'
                        }
                    }

                    
                    defaultValues={
                        {
                            year: 'select year',
                            month: 'select month',
                            day: 'select day'
                        }
                    }
                    options={
                        {
                            yearReverse: true,
                            monthShort: true,
                            monthCaps: true
                        }
                    }
                />
            </div>
        );
    }
}

export default App;
