import { render, screen } from "@testing-library/react";
import { Result } from '../components/Result';

test("Result should render repo name", () => {
  const result = {
    id: 1,
    name: "react",
    owner: { login: "bbb" },
    description: "my description",
    license: null,
    stargazers_count: 10000,
    topics: ["a", "b"],
    language: "Java",
  };
  render(<Result repo={result} />);
  expect(screen.getByText(/react/)).toBeInTheDocument();
});

test("Result should render repo owner", () => {
  const result = {
    id: 1,
    name: "react",
    owner: { login: "bbb" },
    description: "my description",
    license: null,
    stargazers_count: 10000,
    topics: ["a", "b"],
    language: "Java",
  };
  render(<Result repo={result} />);
  expect(screen.getByText(/bbb/)).toBeInTheDocument();
});

test("Result should render repo description", () => {
  const result = {
    id: 1,
    name: "react",
    owner: { login: "bbb" },
    description: "my description",
    license: null,
    stargazers_count: 10000,
    topics: ["a", "b"],
    language: "Java",
  };
  render(<Result repo={result} />);
  expect(screen.getByText(/my description/)).toBeInTheDocument();
});

test("Result should render repo stars count", () => {
  const result = {
    id: 1,
    name: "react",
    owner: { login: "bbb" },
    description: "my description",
    license: null,
    stargazers_count: 10000,
    topics: ["a", "b"],
    language: "Java",
  };
  render(<Result repo={result} />);
  expect(screen.getByText(/10000/)).toBeInTheDocument();
});

test("Result should render repo language", () => {
  const result = {
    id: 1,
    name: "react",
    owner: { login: "bbb" },
    description: "my description",
    license: null,
    stargazers_count: 10000,
    topics: ["a", "b"],
    language: "Java",
  };
  render(<Result repo={result} />);
  expect(screen.getByText(/Java/)).toBeInTheDocument();
});

test("Result should render 'No License Info' when search result provides null for license arttr", () => {
  const result = {
    id: 1,
    name: "aaa",
    owner: { login: "bbb" },
    license: null,
    topics: ["a", "b"],
    language: "Java"
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
