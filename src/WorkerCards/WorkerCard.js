import React from 'react';
import classNames from 'classnames';
import moment from 'moment';

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
            <span className="last-shift-time">{moment.unix(worker.lastShift).format('Do MMM YYYY')}</span>
            <span className="last-shift-time">8:30 to 17:30</span>
          </div>
          <div className="shift">
            <span className="last-shift">Last shift</span>
            <span className="last-shift-time">{moment.unix(worker.nextShift).format('Do MMM YYYY')}</span>
            <span className="last-shift-time">8:30 to 17:30</span>
          </div>
        </div>
        <input type="text" placeholder="Place holder text" />
        <div className="contact-locate-remove">
          <div className="action">
            <span className="logo contact" />
            <span className="contact-label">contact</span>
          </div>
          {worker.status === 'checked-in' ?
            <div className="action">
              <span className="logo locate" />
              <span className="locate-label">Locate</span>
            </div>
            : null
          }
          <div className="action">
            <span className="logo remove"></span>
            <span className="remove-label">Remove</span>
          </div>
        </div>
      </div>
    </div>
  );
}
