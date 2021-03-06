import { contains, theme } from "./../../src/utils";

describe("Function theme", () => {
  it("Create theme", () => {
    theme({
      light: {
        primary: {
          default: "#333",
        },
        secondary: "#553",
      },
    }).createStyle();

    expect(theme().style).toEqual(
      `:root{color-scheme: light;--color-primary: #333;--color-secondary: #553;}`
    );

    theme({
      light: {
        primary: {
          light: "#21312",
        },
      },
    }).createStyle();

    expect(theme().style).toEqual(
      `:root{color-scheme: light;--color-primary: #333;--color-primary-light: #21312;--color-secondary: #553;}`
    );
  });

  it("Change", () => {
    theme().reset();
    theme(
      {
        dark: { primary: "#000" },
        light: { primary: "#fff" },
        "no-preference": { primary: "#777" },
      },
      { use: "light" }
    ).createStyle();

    expect(theme().style).toEqual(`:root{color-scheme: light;--color-primary: #fff;}`);

    theme().change("dark");
    expect(theme().style).toEqual(`:root{color-scheme: dark;--color-primary: #000;}`);

    theme().change("no-preference");
    expect(theme().style).toEqual(`:root{color-scheme: no-preference;--color-primary: #777;}`);
  });

  it("Var Global", () => {
    theme().reset();
    theme({
      global: { text: { light: "#212" } },
      dark: { primary: "#000" },
      light: { primary: "#fff" },
    }).createStyle();

    expect(theme().style).toEqual(
      `:root{color-scheme: light;--color-text-light: #212;--color-primary: #fff;}`
    );

    theme().change("dark");
    expect(theme().style).toEqual(
      `:root{color-scheme: dark;--color-text-light: #212;--color-primary: #000;}`
    );
  });

  it("Get colors", () => {
    theme().reset();
    theme({
      global: { text: { light: "#212" } },
      dark: { primary: "#000", secondary: { default: "#212", light: "#214566" } },
      light: { primary: "#fff" },
    }).createStyle();

    expect(theme().getColor("primary")).toEqual("#fff");

    expect(theme().getColor("dark.primary", false)).toEqual("#000");
    expect(theme().getColor("dark.secondary", false)).toEqual("#212");
    expect(theme().getColor("dark.secondary.light", false)).toEqual("#214566");
  });

  it("Var prefix", () => {
    theme().reset();
    theme(
      {
        global: { text: { light: "#212" } },
        light: { primary: "#000" },
      },
      { prefix: "app" }
    ).createStyle();

    expect(theme().style).toEqual(
      `:root{color-scheme: light;--app-text-light: #212;--app-primary: #000;}`
    );
  });

  it("Theme system", () => {
    theme().reset();
    theme({
      global: { text: { light: "#212" } },
      dark: { primary: "#000" },
    }).createStyle();

    expect(theme().themeSystem).toEqual(`light`);
  });

  it("Class body", () => {
    theme().reset();
    theme({
      global: { text: { light: "#212" } },
      dark: { primary: "#000" },
      light: { primary: "#000" },
    }).createStyle();

    expect(document.body.className).toContain("theme-light");
    expect(contains(document.body.className, "theme-dark")).toBe(false);
  });

  it("is theme", () => {
    theme().reset();
    theme(
      {
        dark: { primary: "#000" },
        light: { primary: "#fff" },
        "no-preference": { primary: "#777" },
      },
      { use: "light" }
    ).createStyle();

    expect(theme().isLight).toBe(true);
    expect(theme().isDark).toBe(false);
    expect(theme().isNoPreference).toBe(false);

    theme().change("dark");
    expect(theme().isLight).toBe(false);
    expect(theme().isDark).toBe(true);
    expect(theme().isNoPreference).toBe(false);

    theme().change("no-preference");
    expect(theme().isLight).toBe(false);
    expect(theme().isDark).toBe(false);
    expect(theme().isNoPreference).toBe(true);
  });
});
