import { render, screen } from "@testing-library/react";
import App from "../../components/App";

describe("Display Transactions", () => {
    it("displays transactions on startup", async () => {
        const transactions = [
            {
                id: 1,
                date: "2024-01-01",
                description: "Paycheck",
                category: "Income",
                amount: 1000,
            },
            {
                id: 2,
                date: "2024-01-02",
                description: "Groceries",
                category: "Food",
                amount: -50,
            },
        ];

        global.setFetchResponse(transactions);

        render(<App />);

        expect(await screen.findByText("Paycheck")).toBeInTheDocument();
        expect(await screen.findByText("Groceries")).toBeInTheDocument();
        expect(await screen.findByText("Income")).toBeInTheDocument();
        expect(await screen.findByText("Food")).toBeInTheDocument();
    });
});