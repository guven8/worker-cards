import React from "react";
import WorkerCard from './WorkerCard';
import data from './data';
import "./workerCards.css";

export default () =>
  <div className="worker-cards-container">
    {data.map(worker => <WorkerCard key={worker.ref} worker={worker} />)}
  </div>;
