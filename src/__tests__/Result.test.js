import { render, screen } from "@testing-library/react";
import { Result } from '../components/Result';

test("Result should render 'No License Info' when search result provides null for license arttr", () => {
  const result = {
    id: 1,
    name: "aaa",
    owner: { login: "bbb" },
    license: null,
    topics: ["a", "b"],
  };
  render(<Result repo={result} />);
  expect(screen.getByText(/No License Info/)).toBeInTheDocument();
})

test("Result should render license info when search result provides license info", () => {
  const result = {
    id: 1,
    name: "aaa",
    owner: { login: "bbb" },
    license: { name: "MIT License" },
    topics: ["a", "b"],
  };
  render(<Result repo={result} />);
  expect(screen.getByText(/MIT License/)).toBeInTheDocument();
});

test("Result should render correct updated_at time format", () => {
  const result = {
    id: 1,
    name: "aaa",
    owner: { login: "bbb" },
    license: { name: "MIT License" },
    topics: ["a", "b"],
    updated_at: "2022-04-29T21:45:15Z",
  };
  render(<Result repo={result} />);
  expect(screen.getByText(/30\/4\/2022/)).toBeInTheDocument();
});
