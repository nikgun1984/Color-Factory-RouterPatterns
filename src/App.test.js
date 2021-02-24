import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

//smoke test
it("mounts without crashing", function () {
	const { getByText } = render(
		<MemoryRouter initialEntries={["/colors/"]}>
			<App />
		</MemoryRouter>
	);
	const redLink = getByText("red");
	expect(redLink).toBeInTheDocument();
});

//snapshot tests
it("matches snapshot", function () {
	const { asFragment } = render(<App />);
	expect(asFragment()).toMatchSnapshot();
});

it("navbar links like red", function () {
	const { getByText } = render(
		<MemoryRouter initialEntries={["/colors/"]}>
			<App />
		</MemoryRouter>
	);

	const link = getByText("red");
	fireEvent.click(link);
	expect(getByText("ISN'T IT BEAUTIFUL")).toBeInTheDocument();

	const backLink = getByText("GO BACK HOME");
	fireEvent.click(backLink);
	expect(getByText("Welcome to the color factory.")).toBeInTheDocument();
});

it("checks if form submits", function () {
	const { getByText, getByLabelText, queryByText } = render(
		<MemoryRouter initialEntries={["/colors/new"]}>
			<App />
		</MemoryRouter>
	);
	const addColorLink = getByText("Add a Color");
	expect(addColorLink).toBeInTheDocument();

	fireEvent.click(addColorLink);

	// no items yet
	expect(queryByText("pink")).not.toBeInTheDocument();

	//fill out the form
	const textInput = getByLabelText("Name Color");
	const colorInput = getByLabelText("Color");
	const submitBtn = queryByText("Add this Color");

	fireEvent.change(textInput, { target: { value: "pink" } });
	fireEvent.change(colorInput, { target: { value: "#FF00FF" } });
	fireEvent.click(submitBtn);

	expect(queryByText("pink")).toBeInTheDocument();
});
