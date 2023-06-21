import PropTypes from 'prop-types';

export default function Mission(props) {
  const { name, description, isMember } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{isMember ? <div>Active Member</div> : <div>NOT A MEMBER</div>}</td>
      <td>Join Mission</td>
    </tr>
  );
}

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isMember: PropTypes.bool.isRequired,
};
