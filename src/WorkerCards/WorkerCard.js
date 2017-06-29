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
  });

  const nextShiftClass = classNames({
    'shift next': true,
    red: worker.status === 'missing'
  });

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
          <div className="shift last">
            <span>Last shift</span>
            <span>{moment.unix(worker.lastShift).format('Do MMM YYYY')}</span>
            <span>8:30 to 17:30</span>
          </div>
          <div className={nextShiftClass}>
            <span>Next shift</span>
            <span>{moment.unix(worker.nextShift).format('Do MMM YYYY')}</span>
            <span>8:30 to 17:30</span>
          </div>
        </div>
        <input type="text" placeholder="Place holder text" />
        <div className="contact-locate-remove">
          <div className="action contact">
            <span className="logo" />
            <span className="label">contact</span>
          </div>
          {worker.status === 'checked-in' ?
            <div className="action locate">
              <span className="logo" />
              <span className="label">Locate</span>
            </div>
            : null
          }
          <div className="action remove">
            <span className="logo"></span>
            <span className={`remove-label ${worker.status}`}>Remove</span>
          </div>
        </div>
      </div>
    </div>
  );
}
