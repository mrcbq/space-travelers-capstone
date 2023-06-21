import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, reserve, cancelReservation } from '../redux/Rocket/RocketSlice';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { isLoading, rockets, errorMessage } = useSelector((store) => store.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);
  const handleReserve = (id) => {
    dispatch(reserve(id));
  };

  const handleCancelation = (id) => {
    dispatch(cancelReservation(id));
  };
  return (
    <div className="rockets">
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && errorMessage ? (
        <div>
          Error:
          {errorMessage}
        </div>
      ) : null}
      {!isLoading && rockets.length
        ? (rockets.map((rocket) => (
          <div key={rocket.rocket_id} className="rocketContainer">
            <img src={rocket.flickr_images[0]} alt={rocket.name} className="rocketImage" />
            <div className="Info">
              <h2>{rocket.rocket_name}</h2>
              <p>
                {rocket.reserved && <span className="reserved">Reserved</span>}
                {rocket.description}
              </p>
              <div className="btn">
                {rocket.reserved ? (
                  <button
                    type="button"
                    onClick={() => handleCancelation(rocket.rocket_id)}
                    className="cancelbtn"
                  >
                    Cancel Reservation

                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleReserve(rocket.rocket_id)}
                    className="reservebtn"
                  >
                    Reserve Rocket

                  </button>
                )}
              </div>
              {errorMessage && <h1>{errorMessage}</h1>}
            </div>
          </div>
        ))
        ) : null}
    </div>

  );
};

export default Rockets;
