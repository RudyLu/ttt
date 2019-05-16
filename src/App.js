import React from 'react';
import './App.css';
import TimeTable from './TimeTable';
import fetchData from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetchData()
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        jsonData.sort((a, b) => {
          var res =  a.OriginStopTime.DepartureTime < b.OriginStopTime.DepartureTime;
          console.log(a.OriginStopTime.DepartureTime, b.OriginStopTime.DepartureTime, res);

          if (a.OriginStopTime.DepartureTime < b.OriginStopTime.DepartureTime) {
            return -1;
          }

          if (a.OriginStopTime.DepartureTime > b.OriginStopTime.DepartureTime) {
            return 1;
          }

          return 0;
        });

        this.setState({ data: jsonData });
      });
  }

  render() {
    if (this.state.data) {
      return (
        <div className="App">
          <TimeTable data={this.state.data} />
        </div>
      );
    }

    return <div>Loading...</div>;
  }
}

export default App;
