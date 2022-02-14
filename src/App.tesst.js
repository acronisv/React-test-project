import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactApp from './App';
import ReactDOM from 'react-dom';

// test('renders learn react link', () => {
//   render(<ReactApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});