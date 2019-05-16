import React from 'react';

function TimeTable(props) {
  return (
    <div className="time-table">
      <h1>Train Time Table</h1>

      {props.data.map((value, index) => {
        return <div key={index}>
           <h1> {value.OriginStopTime.StationName.Zh_tw} - {value.DestinationStopTime.StationName.Zh_tw} </h1>

           {value.DailyTrainInfo.TrainNo} 車次
           <h2> {value.OriginStopTime.DepartureTime} - {value.DestinationStopTime.ArrivalTime} </h2>
        </div>
      })}
    </div>
  );
}

export default TimeTable;
