import { render, screen } from "@testing-library/react";
import {ResultContainer} from "../components/ResultContainer";

test("ResultContainer should render '# repository results' when result is more than zero ", () => {
    const results = { 
        total_count: 1, 
        items: [{ id: 1, name: "aaa", owner: {login: 'bbb'}, license: {name: 'MIT'}, topics: ['a','b'] }]
    };
    render(<ResultContainer results={results} />);
    expect(screen.getByText(/repository results/)).toBeInTheDocument();
    });

test("ResultContainer should render 'No Results' when result is equal to zero ", () => {
    const results = {
        total_count: 0,
        items: [],
    };
    render(<ResultContainer results={results} />);
    expect(screen.getByText(/No Result/)).toBeInTheDocument();
    });

test("ResultContainer should return null when the results set is undefined / size = 0", () => {
    render(<ResultContainer results={undefined} />);
    expect(screen.queryByTestId('custom-element')).toBeFalsy();
    })

