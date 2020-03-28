import React from 'react';
import Select from 'react-select';

const prices = [
  { label: "Mobile" },
  { label: "Laptop" },
  { label: "Headphones" }
];

class SearchTitle extends React.Component {
render(){
  return(
  <div className="container">
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <Select options={ prices } />
    
  
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>
)
}
}
export default SearchTitle
