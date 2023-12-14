import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/programDivs.css";
import NoPrograms from "./noPrograms";
import Calendar from "../pages/calendar";

let dayArray = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
let date = new Date();
let currentDayIndex = date.getDay();
let currentDay = dayArray[currentDayIndex - 1];

function ProgramDivs() {
  const { store, actions } = useContext(Context);
  const [days, setDays] = useState(currentDay);
  return (
    <div>
      <ul className="nav nav-pills  nav-justified" role="tablist">
        {dayArray.map((day, i) => {
          return (
            <>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    currentDay == day ? "active" : ""
                  } dayFont border  `}
                  data-bs-toggle="pill"
                  data-bs-target={`#pills-${day}`}
                  type="button"
                  role="tab"
                  aria-controls={`pills-${day}`}
                  aria-selected={currentDay == day ? "true" : "false"}
                  onClick={() => setDays(day)}
                >
                  {day}
                </button>
              </li>
            </>
          );
        })}
      </ul>
      <Calendar days={days} />
    </div>
  );
}

export default ProgramDivs;