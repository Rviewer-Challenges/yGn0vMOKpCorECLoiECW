import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
// Components
import { BackToLevelSelection } from './BackToLevelSelection';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom') as any,
 useNavigate: () => mockNavigate
}));

describe('BackToLevelSelection', () => {
  it('should navigate to "/select-difficulty" when clicked', async() => {
    
    render(<BackToLevelSelection />);
  
    // Assuming your Button component renders a button element
    const backButton = screen.getByText(/Back to level selection/i);

    // Simulate a click on the button
    fireEvent.click(backButton);

    // Assert that navigation occurred
    // You might need to adjust this based on the actual behavior of your navigation logic
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/select-difficulty'));
  });
});