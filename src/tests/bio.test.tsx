import '@testing-library/jest-dom';
import Bio from '../features/bio/Bio';
import { screen } from '@testing-library/react';
import { render } from '../test-utils';
import userEvent from '@testing-library/user-event';

describe('', () => {
  describe('When rendering', () => {
    test('it should render correctly', async () => {
      render(<Bio />);
      expect(await screen.findByText('Bart Simpson')).toBeInTheDocument();
    });
  });
  describe('When clicking on a button', () => {
    test('clicking on Marge button', async () => {
      render(<Bio />);
      expect(screen.getByLabelText('MARGE')).toBeEnabled();
      await userEvent.click(screen.getByLabelText('MARGE'));
      expect(await screen.findByText('Marge Simpson')).toBeInTheDocument();
    });
  });
});
