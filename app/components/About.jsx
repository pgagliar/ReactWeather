var React = require("react");

var About = (props) =>{
  return(
    <div>
      <h1 className = "text-center">About</h1>
      <p>Here are the project references:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React documentation</a>
        </li>
        <li>
          <a href="https://openweathermap.org/">Weather app documentation</a>
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
