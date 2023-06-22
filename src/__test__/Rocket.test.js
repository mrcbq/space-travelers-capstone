import fetchRocket from '../redux/Rocket/RocketSlice';

jest.mock('../redux/Rocket/RocketSlice', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Rockets must pass the test', () => {
  beforeEach(() => {
    fetchRocket.mockReturnValue([
      {
        id: 1,
        name: 'Falcon 1',
        description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.',
        reserved: false,
      },
      {
        id: 2,
        name: 'Falcon 9',
        description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
        reserved: false,
      },
      {
        id: 3,
        name: 'Falcon Heavy',
        description: 'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon',
        reserved: false,
      },
    ]);
  });

  test('Fetch available rockets must return data', () => {
    expect(fetchRocket()).toBeDefined();
  });

  test('Fetch mission return value length must be', () => {
    expect(fetchRocket()).toHaveLength(3);
  });

  test('Fetch mission return name to be', () => {
    expect(fetchRocket()[2].name).toBe('Falcon Heavy');
  });
});
