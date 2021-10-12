import { formatDate } from "./date-format";

test("canary test to make sure test setup works", () => {
  expect(true).toBe(true);
});

test("formatDate converts date format from 'YYYY-MM-DD' to 'DD MMM YYYY'", () => {
  const result1 = formatDate("2021-09-29");
  const result2 = formatDate("2015-01-31");

  expect(result1).toBe("29 Sep 2021");
  expect(result2).toBe("31 Jan 2015");
});

test("formatDate should not show any 0 digit before the date", () => {
  const result1 = formatDate("2005-11-02");
  const result2 = formatDate("1993-12-09");

  expect(result1).toBe("2 Nov 2005");
  expect(result2).toBe("9 Dec 1993");
});