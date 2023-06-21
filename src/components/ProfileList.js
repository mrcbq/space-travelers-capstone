import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import MyProfile from './MyProfile';
import { getMissions } from '../redux/missions/missionsSlice';

function ProfileList() {
  const { missions } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
    // if (Rockets.length === 0) {
    //   dispatch(getMissions());
    // }
  }, []);

  // const rockets = useSelector((store) => store.rockets);
  // const filteredRockets = rockets.rocketsArr.filter(
  //   (rocket) => rocket.reserved === true,
  // );

  const filteredMissions = missions.filter(
    (mission) => mission.isMember === true,
  );
  console.log(filteredMissions);

  return (
    <section>
      {/* <div>
        <h2>My Rockets</h2>
        <ul>
          {filteredMissions.map((item) => (
            <li key={item.mission_id}>{item.mission_name}</li>
          ))}
        </ul>
      </div> */}
      <div>
        <h2>My Missions</h2>
        <ul>
          {filteredMissions.map((item) => (
            <li key={item.mission_id}>{item.mission_name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProfileList;
