import { render, screen, configure } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {Content} from "../components/Content";
import * as data from '../services/getRepo';



configure({ asyncUtilTimeout: 3000 });

test("Content should render 'Please enter at least 3 characters' when the input is less than 3 charactors", async () => {
    const user = userEvent.setup();
    render(<Content />);

    screen.getByRole('textbox', {name: /search/i}).focus();
    await user.keyboard("aa");

    expect(await screen.findByText(/Please enter at least 3 characters/)).toBeInTheDocument();
});

test("Should call API when the input is more than or equal to 3 charactors", async () => {
  jest.spyOn(data, "getRepo").mockResolvedValue({
    total_count: 1,
    items: [
      {
        id: 1,
        name: "react",
        owner: { login: "facebook" },
        license: { name: "MIT" },
        topics: ["ui", "react"],
        language: "JavaScript",
      },
    ],
  });
  const user = userEvent.setup();
  render(<Content />);

  screen.getByRole("textbox", { name: /search/i }).focus();
  await user.keyboard("react");

  expect(await screen.findByText(/facebook/)).toBeInTheDocument();
  expect(data.getRepo).toHaveBeenCalled();
  expect(data.getRepo).toBeCalledTimes(1);
  expect(data.getRepo).toBeCalledWith('react','All');

  data.getRepo.mockRestore();
});

test("Should filter result by language", async () => {
  jest.spyOn(data, "getRepo").mockResolvedValue({
    total_count: 1,
    items: [
      {
        id: 1,
        name: "react",
        owner: { login: "facebook" },
        license: { name: "MIT" },
        topics: ["ui", "react"],
        language: "JavaScript",
      },
    ],
  });
  const user = userEvent.setup();
  render(<Content />);

  await user.selectOptions(
    screen.getByLabelText("filter"),
    screen.getByText("JavaScript")
  );
  screen.getByRole("textbox", { name: /search/i }).focus();
  await user.keyboard("react");

  expect(await screen.findByText(/facebook/)).toBeInTheDocument();
  expect(data.getRepo).toHaveBeenCalled();
  expect(data.getRepo).toBeCalledTimes(1);
  expect(data.getRepo).toBeCalledWith("react", "javascript");

  data.getRepo.mockRestore();
});

test("Should call another API when user change filter by language option", async () => {
  
  jest.spyOn(data, "getRepo").mockResolvedValue({
    total_count: 1,
    items: [
      {
        id: 1,
        name: "react",
        owner: { login: "facebook" },
        license: { name: "MIT" },
        topics: ["ui", "react"],
        language: "JavaScript",
      },
    ],
  });
  const user = userEvent.setup();
  render(<Content />);

  screen.getByRole("textbox", { name: /search/i }).focus();
  await user.keyboard("react");

  expect(await screen.findByText(/facebook/)).toBeInTheDocument();
  expect(data.getRepo).toHaveBeenCalled();
  expect(data.getRepo).toBeCalledTimes(1);
  expect(data.getRepo).toBeCalledWith("react", "All");
  
  //data.getRepo.mockClear();
  
  await user.selectOptions(
    screen.getByLabelText("filter"),
    screen.getByText("JavaScript")
  );
  
  await new Promise((r) => setTimeout(r, 1000)); // delay to counter suppression
  
  expect(data.getRepo).toHaveBeenCalled();
  expect(data.getRepo).toBeCalledTimes(2);
  expect(data.getRepo).toBeCalledWith("react", "javascript");
  
  data.getRepo.mockRestore();
});

test("Should render error message 'Some errors occur, please try again later' when API fails", async () => {
  jest.spyOn(data, "getRepo").mockRejectedValue({});
  const user = userEvent.setup();
  render(<Content />);

  screen.getByRole("textbox", { name: /search/i }).focus();
  await user.keyboard("&*()&**(&&*(()");

  expect(
    await screen.findByText(/Some errors occur, please try again later/)
  ).toBeInTheDocument();
  expect(data.getRepo).toHaveBeenCalled();
  expect(data.getRepo).toBeCalledTimes(1);
});
