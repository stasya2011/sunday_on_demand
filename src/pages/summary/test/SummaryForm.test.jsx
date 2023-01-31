import { screen, render } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

describe("SummaryForm", () => {
  test("checkbox is unchecked by default", () => {
    render(<SummaryForm />);
    const input = screen.getByRole("checkbox", {
      name: /Terms and Conditions/i,
    });
    const btn = screen.getByRole("button", { name: /Confirm order/i });

    expect(btn).toBeDisabled();
    expect(input).not.toBeChecked();
  });

  test("checkbox enables a button", async () => {
    render(<SummaryForm />);
    const btn = screen.getByRole("button", { name: /Confirm order/i });
    const input = screen.getByRole("checkbox", {
      name: /Terms and Conditions/i,
    });
    const user = userEvent.setup();
    await user.click(input);

    expect(input).toBeChecked();
    expect(btn).toBeEnabled();
  });

  test("unchecking checkbox again disables button", async () => {
    render(<SummaryForm />);

    const btn = screen.getByRole("button", { name: /Confirm order/i });
    const input = screen.getByRole("checkbox", {
      name: /Terms and Conditions/i,
    });
    const user = userEvent.setup();
    await user.click(input);

    expect(input).toBeChecked();
    expect(btn).toBeEnabled();

    await user.click(input);

    expect(btn).toBeDisabled();
  });

  test("popover respons to hover", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);
    // popover shouldn't appear when the page just loads.
    // popover starts out hidden
    // * когда мы только загружаем нашу страничку мы не имеем popover
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    ); //* .queryBy... return null look into https://testing-library.com/docs/queries/about/#priority
    expect(nullPopover).not.toBeInTheDocument();

    // popover appears on mouseover of checkbox label
    // * далее мы ищем кнопку с соответствующим текстом(данная кнопка точно должна
    // * сущестовавать, поэтому мы должны использовать getBy... https://testing-library.com/docs/queries/about/#priority )
    const termsAndConditions = screen.getByText(/Terms and Conditions/i);

    //* когда мы наводим на существующую кнопку
    // ! always await
    await user.hover(termsAndConditions);

    const popover = screen.queryByText(
      /No ice cream will actually be delivered/i
    );
    // * мы ожидаем что получим "popover"
    expect(popover).toBeInTheDocument();

    // popover disappear when we mouse out
    // * если мы уводим курсор с кнопки то мы опять не должны видеть popover
    await user.unhover(termsAndConditions);
    expect(nullPopover).not.toBeInTheDocument();
  });
});
