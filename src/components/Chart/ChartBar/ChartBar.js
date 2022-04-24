import React from "react";
import './ChartBar.css';

const ChartBar = (props) => {
  let quantityFill = '0%';

  if (props.maxValue > 0) {
    quantityFill = Math.round((props.value / props.totalAmount) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{height: quantityFill}}
        />
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
