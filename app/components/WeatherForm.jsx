var React = require('react');

var WeatherForm = React.createClass({
   
    render() {
        return (
          <div>
            <h3>Get Weather</h3>            
              <form>
                <div>
                  <input type="text" placeholder="Enter city name"/></div>
                <div>
                  <button>Get Weather</button></div>
              </form>
          </div>
        );
    }
});

module.exports = WeatherForm;