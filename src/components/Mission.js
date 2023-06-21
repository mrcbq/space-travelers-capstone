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
      <td>{isMember ? <div data-legend="active">Active Member</div> : <div data-legend="inactive">NOT A MEMBER</div>}</td>
      <td>
        <button
          type="button"
          data-legend={isMember ? 'Leave Mission' : 'Join Mission'}
          onClick={() => {
            dispatch(toggleMember(id));
          }}
        >
          {isMember ? 'Leave Mission' : 'Join Mission'}
        </button>
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
