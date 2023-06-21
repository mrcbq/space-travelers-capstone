import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../redux/missions/missionsSlice';
import './ProfileList.css';
// import { fetchRockets } from '../redux/Rocket/RocketSlice';

function ProfileList() {
  const { missions } = useSelector((store) => store.missions);
  // const { rockets } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
    // if (rockets.length === 0) {
    //   dispatch(fetchRockets());
    // }
  }, []);

  const filteredMissions = missions.filter(
    (mission) => mission.isMember === true,
  );
  // const filteredRockets = rockets.filter(
  //   (rocket) => rocket.reserved === true,
  // );

  // console.log(filteredRockets);

  return (
    <section className="profile-container">
      <div className="itemListContainer">
        <h2>My Missions</h2>
        <ul className="ulContainer">
          {filteredMissions.map((item) => (
            <li className="itemList" key={item.mission_id}>{item.mission_name}</li>
          ))}
        </ul>
      </div>
      {/* <div>
        <h2>My Rockets</h2>
        <ul className="ulContainer">
          {filteredRockets.map((item) => (
            <li className="itemList" key={item.rocket_id}>{item.rocket_name}</li>
          ))}
        </ul>
      </div> */}
    </section>
  );
}

export default ProfileList;
