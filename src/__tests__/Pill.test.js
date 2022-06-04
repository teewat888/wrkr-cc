import { render, screen } from "@testing-library/react";
import { Pill } from "../components/Pill";

test("Pill should render correct number of topics", async () => {
    const topics = ['react','ui','system design']
    render(<Pill topics={topics}/>);
    const results = await screen.findAllByRole('button');
    expect(results).toHaveLength(topics.length);
})

test("Pill should render nothing if topic is an empty array", () => {
  const topics = [];
  render(<Pill topics={topics} />);
  expect(screen.queryByText('button')).toBeNull();
});