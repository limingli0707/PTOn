import React from "react";
import Chart from "react-google-charts";

const productHistoryData = [
  ["Date", "Total Views", "Total Sales"],
  ["8/7", 4000, 1500],
  ["13/7", 5000, 2200],
  ["14/7", 5000, 2800],
  ["15/7", 4500, 2200],
  ["17/7", 6500, 3300],
  ["17/7", 5500, 2200],
];
const options = {
  title: "",
  intervals: { 'style':'line' },
  lineWidth: 3,
  legend: 'none'
};
export default class Line extends React.Component {
  render() {
    return (
      <div className="App">
        <Chart
          chartType="LineChart"
          width="100%"
          height="100%"
          data={productHistoryData}
          options={options}
        />
      </div>
    );
  }
}