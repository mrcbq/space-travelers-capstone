const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = async (dispatch) => {
  const response = await fetch(BASE_URL);
  const rockets = await response.json();

  dispatch((rockets.map((rocket) => ({
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    images: rocket.flickr_images,
  }))));
};

export default fetchRockets;
