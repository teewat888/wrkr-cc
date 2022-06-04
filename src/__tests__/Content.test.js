import { render, screen, configure } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {Content} from "../components/Content";

configure({ asyncUtilTimeout: 3000 });

test("Content should render 'Please enter at least 3 characters' when the input is less than 3 charactors", async () => {
    const user = userEvent.setup();
    render(<Content />);

    screen.getByRole('textbox', {name: /search/i}).focus();
    await user.keyboard("aa");

    expect(await screen.findByText(/Please enter at least 3 characters/)).toBeInTheDocument();
});

test("Content should fetch API when the input is more than or equal to 3 charactors", async () => {
  const user = userEvent.setup();
  render(<Content />);

  screen.getByRole("textbox", { name: /search/i }).focus();
  await user.keyboard("react");

  expect(await screen.findByTestId('custom-element')).toBeTruthy();
});
