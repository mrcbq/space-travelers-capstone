import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

// Tests that NavBar component renders without errors
it('test_render_navbar_without_errors', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>,
  );
  const navBarElement = screen.getByText("Space Travelers' Hub");
  expect(navBarElement).toBeInTheDocument();
});
