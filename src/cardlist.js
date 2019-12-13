import React, { Component } from "react";
import Card from "./Card";
import "./style.css";
import { TimelineLite } from "gsap/all";

/*const Cardlist = ({flights, checked}) => {*/

class Cardlist extends Component {
  constructor() {
    super();
    // cards, elements tha will be used in the tween
    this.cards = React.createRef();
    // the timeline instance
    this.tl = new TimelineLite({ paused: true });
  }
  componentDidMount() {
    this.tl.staggerTo(this.cards, 0.5, { autoAlpha: 1, y: -20 }, 0.1);
    this.tl.play();
    console.log(this.cards);
  }

  render() {
    this.tl
      .kill()
      .clear()
      .play();
    return (
      <div className="card-continer">
        {this.props.flights.filtered.map((flight, i) => {
          return (
            <Card
              className="cardlist"
              key={i}
              ref={elemnt => {
                this.cards[i] = elemnt;
              }}
              airline={this.props.flights.filtered[i].card_name}
              from={this.props.flights.filtered[i].chloc1th}
              curtime={this.props.flights.filtered[i].chstol_hour}
              schtime={this.props.flights.filtered[i].chptol_hour}
              flightid={this.props.flights.filtered[i].chfltn}
              airlunecode={this.props.flights.filtered[i].choper}
              status={this.props.flights.filtered[i].chrminh}
              checkInTerminal={this.props.flights.filtered[i].chterm}
              checkInArea={this.props.flights.filtered[i].chckzn}
              checkInDesks={this.props.flights.filtered[i].chcint}
              checked={this.props.checked}
            />
          );
        })}
      </div>
    );
  }
}

export default Cardlist;
