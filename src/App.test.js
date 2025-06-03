import { render, screen } from '@testing-library/react';
import App from './App';
import CartPage from './components/CartPage';
import { Provider } from 'react-redux';
import store from './utils/store';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



test('Should have heading', () => {
  render(
    <Provider store={store}>
       <CartPage />
    </Provider>
  
  );
  const heading = screen.getByText('heading');
  expect(heading).toBeInTheDocument();
});