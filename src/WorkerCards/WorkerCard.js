import React from 'react';
import classNames from 'classnames';

export default ({ worker }) => {
  const favouriteButtonClass = classNames({
    'favourite-button': true,
    favourited: worker.favourite
  });

  const workerStatus = classNames({
    Missing: worker.status === 'missing',
    'Checked into work': worker.status === 'checked-in',
    'Working later today': worker.status === 'working',
  })

  let stars = [];
  for (let i = 0; i < 5; i++) {
    const starClass = classNames({
      star: true,
      active: i < worker.stars
    });
    stars.push(<span key={i} className={starClass} />)
  }

  return (
    <div className="worker-card">
      <img
        className="profile-pic"
        src={require(`./images/${worker.profilePic}`)}
        alt={worker.name}
      />
      <div className={`status ${worker.status}`}>
        <span className="status-icon" />
        <span className="status-label">{workerStatus}</span>
      </div>
      <div className="worker-info">
        <div className="name-ratings">
          <div className="favourite-name">
            <span className={favouriteButtonClass} />
            <span className="name">{worker.name}</span>
          </div>
          <div className="stars-container">
            {stars}
          </div>
        </div>
        <div className="shift-info">
          <div className="shift">
            <span className="last-shift">Last shift</span>
            <span className="last-shift-time">23 March 2017</span>
            <span className="last-shift-time">8:30 to 17:30</span>
          </div>
          <div className="shift">
            <span className="last-shift">Last shift</span>
            <span className="last-shift-time">23 March 2017</span>
            <span className="last-shift-time">8:30 to 17:30</span>
          </div>
        </div>
      </div>
    </div>
  );
}
