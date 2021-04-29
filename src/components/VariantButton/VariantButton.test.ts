import * as path from "path";
import { run, AxeResults } from "axe-core";
import { reactRunDOM } from "@component-controls/test-renderers";
import "@component-controls/jest-axe-matcher";
import { loadConfigurations } from "@component-controls/config";
import { renderExample } from "@component-controls/test-renderers";
import { render, act } from "@testing-library/react";
import { renderErr } from "@component-controls/test-renderers";

import doc, {
  overview,
  primary,
  accent,
  disabled,
  success,
  error,
  warning
} from "./VariantButton.docs";

describe("VariantButton", () => {
  const configPath = path.resolve(__dirname, "../../../.config");
  const config = loadConfigurations(configPath);

  describe("overview", () => {
    const example = overview;

    let rendered;
    act(() => {
      rendered = renderExample({
        example,
        doc,
        config
      });
    });
    if (!rendered) {
      renderErr();
      return;
    }
    it("snapshot", () => {
      const { asFragment } = render(rendered);
      expect(asFragment()).toMatchSnapshot();
    });
    it("accessibility", async () => {
      const axeResults = await reactRunDOM<AxeResults>(rendered, run);
      expect(axeResults).toHaveNoAxeViolations();
    });
  });

  describe("primary", () => {
    const example = primary;

    let rendered;
    act(() => {
      rendered = renderExample({
        example,
        doc,
        config
      });
    });
    if (!rendered) {
      renderErr();
      return;
    }
    it("snapshot", () => {
      const { asFragment } = render(rendered);
      expect(asFragment()).toMatchSnapshot();
    });
    it("accessibility", async () => {
      const axeResults = await reactRunDOM<AxeResults>(rendered, run);
      expect(axeResults).toHaveNoAxeViolations();
    });
  });

  describe("accent", () => {
    const example = accent;

    let rendered;
    act(() => {
      rendered = renderExample({
        example,
        doc,
        config
      });
    });
    if (!rendered) {
      renderErr();
      return;
    }
    it("snapshot", () => {
      const { asFragment } = render(rendered);
      expect(asFragment()).toMatchSnapshot();
    });
    it("accessibility", async () => {
      const axeResults = await reactRunDOM<AxeResults>(rendered, run);
      expect(axeResults).toHaveNoAxeViolations();
    });
  });

  describe("disabled", () => {
    const example = disabled;

    let rendered;
    act(() => {
      rendered = renderExample({
        example,
        doc,
        config
      });
    });
    if (!rendered) {
      renderErr();
      return;
    }
    it("snapshot", () => {
      const { asFragment } = render(rendered);
      expect(asFragment()).toMatchSnapshot();
    });
    it("accessibility", async () => {
      const axeResults = await reactRunDOM<AxeResults>(rendered, run);
      expect(axeResults).toHaveNoAxeViolations();
    });
  });

  describe("success", () => {
    const example = success;

    let rendered;
    act(() => {
      rendered = renderExample({
        example,
        doc,
        config
      });
    });
    if (!rendered) {
      renderErr();
      return;
    }
    it("snapshot", () => {
      const { asFragment } = render(rendered);
      expect(asFragment()).toMatchSnapshot();
    });
    it("accessibility", async () => {
      const axeResults = await reactRunDOM<AxeResults>(rendered, run);
      expect(axeResults).toHaveNoAxeViolations();
    });
  });

  describe("error", () => {
    const example = error;

    let rendered;
    act(() => {
      rendered = renderExample({
        example,
        doc,
        config
      });
    });
    if (!rendered) {
      renderErr();
      return;
    }
    it("snapshot", () => {
      const { asFragment } = render(rendered);
      expect(asFragment()).toMatchSnapshot();
    });
    it("accessibility", async () => {
      const axeResults = await reactRunDOM<AxeResults>(rendered, run);
      expect(axeResults).toHaveNoAxeViolations();
    });
  });

  describe("warning", () => {
    const example = warning;

    let rendered;
    act(() => {
      rendered = renderExample({
        example,
        doc,
        config
      });
    });
    if (!rendered) {
      renderErr();
      return;
    }
    it("snapshot", () => {
      const { asFragment } = render(rendered);
      expect(asFragment()).toMatchSnapshot();
    });
    it("accessibility", async () => {
      const axeResults = await reactRunDOM<AxeResults>(rendered, run);
      expect(axeResults).toHaveNoAxeViolations();
    });
  });
});
