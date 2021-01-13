import React from "react";
import ReactDOM from "react-dom";
import { fireEvent, getQueriesForElement } from "@testing-library/dom";

function Counter() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        {counter}
      </button>
    </div>
  );
}

function render(ui) {
  const container = document.createElement("div");

  ReactDOM.render(ui, container);

  return getQueriesForElement(container);
}

test("renders a Counter", () => {
  const { getByText } = render(<Counter />);

  const counterButton = getByText("0");

  fireEvent.click(counterButton);
  expect(counterButton.innerHTML).toBe("1");

  fireEvent.click(counterButton);
  expect(counterButton.innerHTML).toBe("2");
});
