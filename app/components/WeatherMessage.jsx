var React = require('react');
var ReactDOM = require('react-dom');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It's {temp} in {location}.</h3>
  );
};

module.exports = WeatherMessage;
