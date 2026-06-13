import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../components/App";

describe("Add Transactions", () => {
    it("adds a new transaction to the frontend", async () => {
        global.setFetchResponse([]);

        render(<App />);

        const newTransaction = {
            id: 3,
            date: "2024-01-03",
            description: "Coffee",
            category: "Food",
            amount: 5,
        };

        global.setFetchResponse(newTransaction);

        fireEvent.change(screen.getByPlaceholderText("Description"), {
            target: { value: "Coffee" },
        });

        fireEvent.change(screen.getByPlaceholderText("Category"), {
            target: { value: "Food" },
        });

        fireEvent.change(screen.getByPlaceholderText("Amount"), {
            target: { value: "5" },
        });

        // testing
        const dateInput = document.querySelector('input[name="date"]');

        fireEvent.change(dateInput, {
            target: { value: "2024-01-03" },
        });

        fireEvent.click(screen.getByText("Add Transaction"));

        expect(await screen.findByText("Coffee")).toBeInTheDocument();
        expect(global.fetch).toHaveBeenCalled();
    });
});