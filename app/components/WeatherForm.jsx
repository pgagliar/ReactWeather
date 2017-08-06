var React = require('react');
var ReactDOM = require('react-dom');

var WeatherForm =  React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var location = this.location.value;
    if (location.length>0){
      this.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <form onSubmit = {this.onFormSubmit}>
        <input type="search" ref={location => this.location = location} placeholder = "Search weather by city"/>
        <button className="button expanded hollow">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
