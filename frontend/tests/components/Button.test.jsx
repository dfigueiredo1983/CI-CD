import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../src/components/Button';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled={true}>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeDisabled();
  });

  test('has correct styles when disabled', () => {
    render(<Button disabled={true}>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);

    expect(buttonElement).toHaveStyle('background-color: #ccc');
    expect(buttonElement).toHaveStyle('cursor: not-allowed');
  });
});