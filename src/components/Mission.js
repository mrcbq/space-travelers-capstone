import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleMember } from '../redux/missions/missionsSlice';

export default function Mission(props) {
  const {
    name, description, isMember, id,
  } = props;
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{isMember ? <div>Active Member</div> : <div>NOT A MEMBER</div>}</td>
      <td>
        {isMember ? (
          <button
            type="button"
            onClick={() => {
              dispatch(toggleMember(id));
            }}
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              dispatch(toggleMember(id));
            }}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
}

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isMember: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
