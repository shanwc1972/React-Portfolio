import React from 'react';
import Project from '../Project'; // Import the Project component

export default function Portfolio() {
  return (
    <div className="container">
      <h1>PORTFOLIO PAGE</h1>
      <div className="flexbody">
        <Project
          title="Panda Reserve"
          imgSrc="./assets/images/panda.jpg"
          imgAlt="Welcome to the Panda reserve"
          link="https://shanwc1972.github.io/mini-project/"
          github="https://github.com/shanwc1972/mini-project"
        />
        <Project
          title="Horiseon Marketing"
          imgSrc="./assets/images/horiseon.jpg"
          imgAlt="Horiseon Marketing"
          link="https://shanwc1972.github.io/module1-challenge"
          github="https://github.com/shanwc1972/module1-challenge"
        />
        <Project
          title="Employee Payroll Tracker"
          imgSrc="./assets/images/employeepayrolltracker.png"
          imgAlt="Employee Payroll Tracker"
          link="https://shanwc1972.github.io/employee-payroll-tracker"
          github="https://github.com/shanwc1972/employee-payroll-tracker"
        />
        <Project
          title="Weather Dashboard"
          imgSrc="./assets/images/weatherdashboard.png"
          imgAlt="Weather dashboard"
          link="https://shanwc1972.github.io/weather-dashboard"
          github="https://github.com/shanwc1972/weather-dashboard"
        />
        <Project
          title="MVC Techblog"
          imgSrc="./assets/images/mvctechblog.png"
          imgAlt="MVC Techblog"
          link="https://mvc-techblog-dk8f.onrender.com/"
          github="https://github.com/shanwc1972/mvc-techblog"
        />
        <Project
          title="Focustrack"
          imgSrc="./assets/images/Focustrack.png"
          imgAlt="Focustrack"
          link="https://focustrack.onrender.com"
          github="https://github.com/Cbeattie97/FocusTrack"
        />
      </div>
    </div>
  );
}
