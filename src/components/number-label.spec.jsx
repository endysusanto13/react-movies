import { render } from "@testing-library/react";
import { NumberLabel } from "./number-label";

test('<NumberLabel variant="primary" >', () => {
  const { container } = render(<NumberLabel type="" variant="primary">11</NumberLabel>);

  expect(container.firstChild).toMatchInlineSnapshot(`
  <button
    class="inline-flex justify-center items-center py-0.5 px-4 border shadow-sm text-xl font-medium rounded-md border-transparent text-indigo-900 bg-white cursor-default"
    type=""
  >
    11
  </button>
  `);
});
