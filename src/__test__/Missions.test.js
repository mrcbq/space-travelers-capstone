import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);
describe('Missions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            mission_id: '1',
            mission_name: 'Mission 1',
            description: 'Description 1',
            isMember: true,
          },
          {
            mission_id: '2',
            mission_name: 'Mission 2',
            description: 'Description 2',
            isMember: false,
          },
        ],
      },
    });
  });

  test('renders mission list correctly', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.getByText('Mission 2')).toBeInTheDocument();

    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();

    expect(screen.getByText('Active Member')).toBeInTheDocument();
    expect(screen.getByText('NOT A MEMBER')).toBeInTheDocument();
  });
});
