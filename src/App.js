import React, { Component } from "react";
import "./App.css";
import Header from "./header.js";
import Searchbox from "./searchbox.js";
import "./style.css";
import Cardlist from "./cardlist.js";
import Loading from "./Loading.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      flights: {
        data: [
          {
            flights: [
              {
                _id: "some id",
                card_name: "air line name",
                chloc1th: "from city",
                chstol_hour: "current time",
                chptol_hour: "scedule time",
                chfltn: "flight id",
                choper: "air line code",
                chrminh: "status"
              }
            ]
          }
        ],
        lastupdate_date: "",
        lastupdate_hour: ""
      },
      searchfield: "",
      checked: true,
      arrival: {
        data: [
          {
            flights: [
              {
                _id: "some id",
                card_name: "air line name",
                chloc1th: "from city",
                chstol_hour: "current time",
                chptol_hour: "scedule time",
                chfltn: "flight id",
                choper: "air line code",
                chrminh: "status"
              }
            ]
          }
        ],
        lastupdate_date: "",
        lastupdate_hour: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = "https://www.landingspage.co.il/api/arrival.json";
    fetch(proxyUrl + targetUrl)
      .then(response => response.json())
      .then(flights => {
        this.setState({ flights: flights });
      })
      .catch(err => console.log(err));
    fetch(proxyUrl + "https://www.landingspage.co.il/api/departure.json")
      .then(res => res.json())
      .then(arrival => {
        this.setState({ arrival: arrival });
      })
      .catch(err => console.log(err));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  handleChange = checked => {
    if (this.state.checked) {
      this.setState({ checked: false });
    } else {
      this.setState({ checked: true });
    }
  };

  render() {
    const { flights, searchfield, arrival, checked } = this.state;
    let filteredFlights;
    if (checked) {
      filteredFlights = flights;
      filteredFlights = flights.data.map((flight, j) => {
        return flights.data[j].flights.map((flight, i) => {
          if (
            flights.data[j].flights[i].card_name
              .toLowerCase()
              .includes(searchfield.toLowerCase()) ||
            flights.data[j].flights[i].chloc1th
              .toLowerCase()
              .includes(searchfield.toLowerCase()) ||
            flights.data[j].flights[i].chfltn
              .toLowerCase()
              .includes(searchfield.toLowerCase())
          ) {
            return flights.data[j].flights[i];
          }
        });
      });
    } else {
      filteredFlights = arrival;

      filteredFlights = arrival.data.map((flight, j) => {
        return arrival.data[j].flights.map((flight, i) => {
          if (
            arrival.data[j].flights[i].card_name
              .toLowerCase()
              .includes(searchfield.toLowerCase()) ||
            arrival.data[j].flights[i].chloc1th
              .toLowerCase()
              .includes(searchfield.toLowerCase()) ||
            arrival.data[j].flights[i].chfltn
              .toLowerCase()
              .includes(searchfield.toLowerCase())
          ) {
            return arrival.data[j].flights[i];
          }
        });
      });
    }

    let filtered = [];
    filteredFlights.map((flight, j) => {
      return filteredFlights[j].map((flight, i) => {
        if (filteredFlights[j][i] !== undefined) {
          return filtered.push(filteredFlights[j][i]);
        } else {
          return null;
        }
      });
    });

    if (flights.data[0].flights.length === 1) {
      return <Loading />;
    } else {
      return (
        <div className="App">
          <Header onChange={this.handleChange} checked={this.state.checked} />
          <Searchbox searchChange={this.onSearchChange} />

          <p className="update">
            עדכון אחרון: {flights.lastupdate_date} בשעה{" "}
            {flights.lastupdate_hour}
          </p>
          <Cardlist flights={{ filtered }} checked={checked} />
        </div>
      );
    }
  }
}

export default App;
