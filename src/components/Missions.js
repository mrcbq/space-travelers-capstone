import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';
import { useEffect } from 'react';

export default function Missions() {
  const missions = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if(missions.missionsArr.length === 0) {
      dispatch(getMissions());
    }
  }, [])

  console.log('Hello');
  console.log(missions);
  return <div>missions</div>;
}
