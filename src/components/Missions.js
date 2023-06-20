import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';

export default function Missions() {
  const missions = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  dispatch(getMissions());
  console.log('Hello');
  console.log(missions);
  return <div>missions</div>;
}
