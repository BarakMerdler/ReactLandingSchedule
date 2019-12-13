import React from "react";
import Animscroll from "./Animscroll.js";
/*import './style.css';
 */

const Card = ({
  airline,
  from,
  curtime,
  schtime,
  flightid,
  airlunecode,
  status,
  checkInTerminal,
  checkInArea,
  checkInDesks,
  checked
}) => {
  let color;
  switch (status) {
    case "נחתה":
    case "המריאה":
      color = "DarkGreen";
      break;
    case "בנחיתה":
      color = "green";
      break;
    case "סופי":
    case "בזמן":
    case "הוקדמה":
      color = "blue";
      break;
    case "לא סופי":
      color = "black";
      break;
    default:
      color = "red";
  }

  let adjustArr;

  if (!checked) {
    adjustArr = "adjust";
  }
  let bout;
  if (curtime !== schtime) {
    bout = (
      <div className={"middle-card schedule-time " + adjustArr}>{curtime}</div>
    );
  }
  let cansel;

  if (status === "מבוטלת") {
    cansel = (
      <div className="cansel-continer">
        <h1>מבוטלת </h1>
        <div className="left-card cansel">
          <div className="up-card landing-time">{schtime}</div>
          {bout}
          <div className="down-card status">
            <div className="anim"></div>
            <div className={color + " status-text"}>{status}</div>
          </div>
        </div>
      </div>
    );
  } else if (checked) {
    cansel = (
      <div className="left-card">
        <div className="up-card landing-time">{schtime}</div>
        {bout}
        <div className="down-card status">
          <Animscroll status={status} />
          <div className={color + " status-text"}>{status}</div>
        </div>
      </div>
    );
  } else {
    let checkin = <div></div>;
    let notCheckin = "no-checkin";
    if (checkInArea !== "") {
      checkin = (
        <div className="checkin">
          <div className="checkin-area">
            {checkInArea.toUpperCase()}
            <p>אזור</p>
          </div>
          <div className="checkin-area">
            {checkInDesks.toUpperCase()}
            <p>דלפקים</p>
          </div>
        </div>
      );
      notCheckin = "";
    }

    cansel = (
      <div className="left-card arring">
        <div className={"up-card up-arring " + notCheckin}>
          <div className="landing-time landing-time-arriving ">
            {" "}
            {schtime}
            {bout}
          </div>
          <div className="terminal blue">
            {checkInTerminal}
            <p className="black">טרמינל</p>
          </div>
        </div>
        {checkin}
        <div className="down-card status arriving-status">
          <div className={color + " status-text"}>{status}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="card grow ma2 fl w-forth pa2 shadow-5">
      <div className="right-card">
        <div className="up-card city">{from}</div>
        <div className="capitalize middle-card airline">{airline}</div>
        <div className="down-card airline-code">
          {airlunecode.toUpperCase()} {flightid.toUpperCase()}
        </div>
      </div>

      {cansel}
    </div>
  );
};

export default Card;
