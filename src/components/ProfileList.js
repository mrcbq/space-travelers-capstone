import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import MyProfile from './MyProfile';
import { getMissions } from '../redux/missions/missionsSlice';
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
    <section>
      <div>
        <h2>My Missions</h2>
        <ul>
          {filteredMissions.map((item) => (
            <li key={item.mission_id}>{item.mission_name}</li>
          ))}
        </ul>
      </div>
      {/* <div>
        <h2>My Rockets</h2>
        <ul>
          {filteredRockets.map((item) => (
            <li key={item.rocket_id}>{item.rocket_name}</li>
          ))}
        </ul>
      </div> */}
    </section>
  );
}

export default ProfileList;
