var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a sample React application coming out 
      of the React course on Udemy.</p>
      <div>Below are some links to resources you may find of use.</div>
      <ul>
        <li>
          <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/" target="_blank">This Udemy course</a>
        </li>
        <li>
          <a href="https://github.com/EricBell/ReactWeather" target="_blank">This app''s repo on Github</a>
        </li>
        <li>
          <a href="http://openweathermap.org" target="_blank">Open Weather</a>
        </li>
      </ul>
    </div>
  );
}

module.exports = About;