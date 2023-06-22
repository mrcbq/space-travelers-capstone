import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ProfileList from '../components/ProfileList';
import rootReducer from './rootReducer';

const mockStore = (state) => configureStore({ reducer: rootReducer, preloadedState: state });

describe('Missions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          { mission_id: 1, mission_name: 'Mission 1', isMember: true },
          { mission_id: 2, mission_name: 'Mission 2', isMember: false },
        ],
      },
      rockets: {
        rockets: [
          { rocket_id: 1, rocket_name: 'Rocket 1', reserved: true },
          { rocket_id: 2, rocket_name: 'Rocket 2', reserved: false },
        ],
      },
    });
  });

  // Tests that missions and rockets are filtered correctly
  it('test_filter_missions_and_rockets_correctly', () => {
    render(
      <Provider store={store}>
        <ProfileList />
      </Provider>,
    );
    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.queryByText('Mission 2')).not.toBeInTheDocument();
    expect(screen.getByText('Rocket 1')).toBeInTheDocument();
    expect(screen.queryByText('Rocket 2')).not.toBeInTheDocument();
  });
});
