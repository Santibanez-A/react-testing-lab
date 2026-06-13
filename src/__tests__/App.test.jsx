import './test_suites/AddTransactions.test'
import './test_suites/DisplayTransactions.test'
import './test_suites/SearchSort.test'

import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
    it("renders the bank title", () => {
        global.setFetchResponse([]);

        render(<App />);

        expect(screen.getByText("The Royal Bank of Flatiron")).toBeInTheDocument();
    });
});