import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../components/App";

describe("Search Transactions", () => {
    it("updates the search input when a change event is triggered", async () => {
        global.setFetchResponse([]);

        render(<App />);

        const searchInput = screen.getByPlaceholderText("Search your Recent Transactions");

        fireEvent.change(searchInput, {
            target: { value: "rent" },
        });

        expect(searchInput.value).toBe("rent");
    });
});