import React from "react";
import "./workerCards.css";
import barotBellingham from "./images/Barot_Bellingham_tn.jpg";
import constanceSmith from "./images/Constance_Smith_tn.jpg";
import jenniferJerome from "./images/Jennifer_Jerome_tn.jpg";

export default () =>
  <div className="worker-cards-container">
    <div className="worker-card">
      <img
        className="profile-pic"
        src={barotBellingham}
        alt="Barot Bellingham"
      />
      <div className="status missing" />
    </div>
    <div className="worker-card">
      <img className="profile-pic" src={constanceSmith} alt="Constance Smith" />
      <div className="status checked-in" />
    </div>
    <div className="worker-card">
      <img className="profile-pic" src={jenniferJerome} alt="Jennifer Jerome" />
      <div className="status working" />
    </div>
  </div>;
