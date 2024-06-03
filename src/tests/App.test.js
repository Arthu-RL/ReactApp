import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import HigherOrder from '../components/Calculator/components/HigherOrder';
import Score from '../components/Contact/components/Score';

test('Renders mouse position', () => {
  render(<HigherOrder />);
  const linkElement = screen.getByText('Mouse position:');
  expect(linkElement).toBeInTheDocument();
});

describe("Feedback form", () => {
    test("Submission is disabled if score is lower than 5 and there is no feedback", () => {
        const handleSubmit = jest.fn();
        render(<Score onSubmit={handleSubmit}/>)

        const rangeInput = screen.getByLabelText(/Score:/);
        fireEvent.change(rangeInput, {target: {value: "4"}});

        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton)

        expect(handleSubmit).not.toHaveBeenCalled();
        expect(submitButton).toHaveAttribute("disabled");
    });

    test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
      const handleSubmit = jest.fn();
      render(<Score onSubmit={handleSubmit}/>)

      const rangeInput = screen.getByLabelText(/Score:/);
      fireEvent.change(rangeInput, {target: {value: "6"}});

      const submitButton = screen.getByRole("button");
      fireEvent.click(submitButton)

      expect(handleSubmit).toHaveBeenCalledWith({ 
        score: "6", 
        comment: "" 
      });
      expect(submitButton).not.toHaveAttribute("disabled");
  });
});
