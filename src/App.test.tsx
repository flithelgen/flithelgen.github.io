import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import App from "./App.tsx";

// Talar om för React att testerna körs i en act()-miljö.
(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let container: HTMLDivElement;
let root: Root;

function renderApp() {
  act(() => root.render(<App />));
}

function navLinks() {
  return [ ...container.querySelectorAll<HTMLAnchorElement>(".site-nav__links a") ];
}

function linkByText(text: string) {
  return [ ...container.querySelectorAll("a") ].find((link) => link.textContent?.trim() === text)!;
}

// jsdom saknar ResizeObserver; stubben anropar callbacken direkt när ett element observeras.
beforeEach(() => {
  vi.stubGlobal("ResizeObserver", class {
    constructor(private callback: () => void) {}
    observe() {
      this.callback();
    }
    disconnect() {}
  });
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  vi.unstubAllGlobals();
  document.documentElement.style.removeProperty("--nav-height");
});

describe("Feature: Startsidan", () => {
  describe("Scenario: A visitor loads the page", () => {
    it("Given the app is rendered, Then every nav link points to an existing section", () => {
      renderApp();
      const links = navLinks();

      expect(links.map((link) => link.textContent)).toEqual([ "Hem", "Om FLIT", "Teknik", "Detaljer", "Anmälan", "Om oss", "Kontakta oss" ]);
      for (const link of links) {
        expect(container.querySelector(link.getAttribute("href")!), link.textContent!).not.toBeNull();
      }
    });

    it("Then the event date and registration deadline are shown", () => {
      renderApp();
      expect(container.querySelector(".info-card__value")?.textContent).toBe("30-31 januari 2027");
      expect(container.querySelector(".deadline__date")?.textContent).toBe("12 januari 2027");
    });

    it("Then the Google Forms and mail links are present", () => {
      renderApp();
      expect(linkByText("Anmäl dig via Google Forms").getAttribute("href")).toBe("https://forms.gle/ma3wmziUuuVVkWsK6");
      expect(linkByText("Skicka mail").getAttribute("href")).toBe("mailto:flithelgen@gmail.com");
    });

    it("Then the team names are listed with the last joined by 'och'", () => {
      renderApp();
      const text = container.querySelector("#om-oss")!.textContent!;
      expect(text).toContain("Laura Connell, Antonina Bukhonina");
      expect(text).toContain("Diana Kryshchuk och Polly Wahlbeck -");
    });
  });

  describe("Scenario: A visitor clicks a nav link", () => {
    it("Given 'Hem' is current, When clicking 'Anmälan', Then 'Anmälan' becomes current", () => {
      renderApp();
      const link = (label: string) => navLinks().find((navLink) => navLink.textContent === label)!;
      expect(link("Hem").getAttribute("aria-current")).toBe("true");

      act(() => link("Anmälan").click());

      expect(link("Anmälan").getAttribute("aria-current")).toBe("true");
      expect(link("Hem").getAttribute("aria-current")).toBeNull();
    });
  });

  describe("Scenario: The sticky nav must not hide section headings", () => {
    it("Given the app is rendered, Then the nav height is exposed as --nav-height for scroll-padding", () => {
      renderApp();
      expect(document.documentElement.style.getPropertyValue("--nav-height")).toMatch(/^\d+px$/);
    });
  });
});
