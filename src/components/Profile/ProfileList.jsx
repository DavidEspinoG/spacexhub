import PropTypes from 'prop-types';
import '../../styles/Profile.css';

const ProfileList = ({ title, elements, propertyName }) => (
  <div>
    <h2>{title}</h2>
    <div
      className="profile-list-elements-container"
    >
      {elements.length === 0 && (
      <div className="profile-list-element">
        <p>
          You don&apos;t have any reservation yet
        </p>
      </div>
      )}
      {elements.map((element) => (
        <div key={element.mission_id} className="profile-list-element">
          <p>{element[propertyName]}</p>
        </div>
      ))}
    </div>
  </div>
);

ProfileList.propTypes = {
  title: PropTypes.string.isRequired,
  elements: PropTypes.instanceOf(Array).isRequired,
  propertyName: PropTypes.string,
};

ProfileList.defaultProps = {
  propertyName: 'mission_name',
};

export default ProfileList;
