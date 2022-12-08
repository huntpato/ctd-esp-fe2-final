import '@testing-library/jest-dom';
import Cita from '../features/quote/Cita';
import { render, screen, waitFor } from '../test-utils';
import userEvent from '@testing-library/user-event';

describe('component <Cita />', () => {
  describe('When rendering', () => {
    test('it should render correctly', () => {
      render(<Cita />);
      expect(screen.getByText('No se encontro ninguna cita')).toBeInTheDocument();
      expect(screen.getByLabelText('Obtener cita aleatoria')).toBeEnabled();
      expect(screen.getByLabelText('Borrar')).toBeEnabled();
    });
  });
  describe('When rendering a random quote', () => {
    test('should fetch a random quote when clicking the random quote button', async () => {
      render(<Cita />);
      expect(screen.getByText('No se encontro ninguna cita')).toBeInTheDocument();

      await userEvent.click(screen.getByLabelText('Obtener cita aleatoria'));
      expect(await screen.findByText('Moe Szyslak')).toBeInTheDocument();
    });
  });
  describe('When rendering a random quote by character', () => {
    test("should render a quote from character 'Troy' typed in the input", async () => {
      render(<Cita />);

      const inputSearch = screen.getByLabelText('Author Cita');
      userEvent.type(inputSearch, 'troy');
      await waitFor(() => expect(inputSearch).toHaveValue('troy'));
      userEvent.click(screen.getByLabelText('Obtener Cita'));

      expect(await screen.findByText('Ahh! Sweet liquor eases the pain.')).toBeInTheDocument();
    });
    test('should render an error message when introducing a number', async () => {
      render(<Cita />);

      const inputSearch = screen.getByLabelText('Author Cita');
      userEvent.type(inputSearch, '3');
      await waitFor(() => expect(inputSearch).toHaveValue('3'));
      const button = screen.getByText(/obtener/i);
      userEvent.click(button);

      //screen.debug()
      expect(await screen.findByText('Por favor ingrese un nombre válido')).toBeInTheDocument();
    });
  });
  describe("When clicking the 'borrar' button", () => {
    test('should clear the input info', async () => {
      render(<Cita />);

      const inputSearch = screen.getByLabelText('Author Cita');
      userEvent.type(inputSearch, 'troy');
      await waitFor(() => expect(inputSearch).toHaveValue('troy'));

      await userEvent.click(screen.getByLabelText('Borrar'));
      expect(inputSearch as HTMLInputElement).toHaveValue('');
      expect(screen.getByText('No se encontro ninguna cita')).toBeInTheDocument();
    });
  });
});
