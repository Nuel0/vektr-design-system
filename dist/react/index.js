// src/components/Button.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  style,
  className = "",
  ...props
}) => {
  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--spacing-brand-gap, 8px)",
    borderRadius: "var(--radius-brand, 8px)",
    fontWeight: 600,
    cursor: disabled || isLoading ? "not-allowed" : "pointer",
    opacity: disabled || isLoading ? 0.6 : 1,
    transition: "all 0.2s ease-in-out",
    border: "var(--border-brand-width, 1px) solid transparent",
    outline: "none",
    fontFamily: "var(--font-body, inherit)"
  };
  const variantStyles = {
    primary: {
      backgroundColor: "var(--brand-primary)",
      color: "var(--text-inverse)",
      borderColor: "var(--brand-primary)"
    },
    secondary: {
      backgroundColor: "var(--surface-raised)",
      color: "var(--text-primary)",
      borderColor: "var(--border-default)"
    },
    danger: {
      backgroundColor: "var(--status-danger)",
      color: "#ffffff",
      borderColor: "var(--status-danger)"
    },
    ghost: {
      backgroundColor: "transparent",
      color: "var(--text-primary)"
    },
    outline: {
      backgroundColor: "transparent",
      color: "var(--brand-primary)",
      borderColor: "var(--brand-primary)"
    }
  };
  const sizeStyles = {
    sm: {
      padding: "var(--space-1, 4px) var(--space-3, 12px)",
      fontSize: "var(--body-sm, 12px)"
    },
    md: {
      padding: "var(--spacing-brand-padding, 12px) var(--space-4, 16px)",
      fontSize: "var(--body-base, 14px)"
    },
    lg: {
      padding: "var(--space-4, 16px) var(--space-6, 24px)",
      fontSize: "var(--body-lg, 16px)"
    }
  };
  const combinedStyles = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      style: combinedStyles,
      disabled: disabled || isLoading,
      className: `vektr-button vektr-button-${variant} vektr-button-${size} ${className}`,
      ...props,
      children: isLoading ? /* @__PURE__ */ jsx("span", { style: { display: "inline-block", animation: "spin 1s linear infinite" }, children: "\u23F3" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        leftIcon && /* @__PURE__ */ jsx("span", { style: { display: "inline-flex" }, children: leftIcon }),
        /* @__PURE__ */ jsx("span", { children }),
        rightIcon && /* @__PURE__ */ jsx("span", { style: { display: "inline-flex" }, children: rightIcon })
      ] })
    }
  );
};

// src/components/Card.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = ({
  children,
  variant = "base",
  style,
  className = "",
  ...props
}) => {
  const variantStyles = {
    base: {
      backgroundColor: "var(--surface-base)",
      color: "var(--text-primary)",
      border: "var(--border-width-thin, 1px) solid var(--border-default)",
      boxShadow: "0 1px 3px var(--shadow-color-sm)"
    },
    raised: {
      backgroundColor: "var(--surface-raised)",
      color: "var(--text-primary)",
      border: "var(--border-width-thin, 1px) solid var(--border-default)",
      boxShadow: "0 4px 6px var(--shadow-color-md)"
    },
    sunken: {
      backgroundColor: "var(--surface-sunken)",
      color: "var(--text-primary)",
      border: "var(--border-width-thin, 1px) solid var(--border-default)"
    },
    inverse: {
      backgroundColor: "var(--surface-inverse)",
      color: "var(--text-inverse)",
      border: "1px solid transparent"
    }
  };
  const cardStyle = {
    borderRadius: "var(--radius-brand, 8px)",
    padding: "var(--space-6, 24px)",
    transition: "all 0.2s ease-in-out",
    ...variantStyles[variant],
    ...style
  };
  return /* @__PURE__ */ jsx2("div", { style: cardStyle, className: `vektr-card vektr-card-${variant} ${className}`, ...props, children });
};
var CardHeader = ({ children, style, className = "", ...props }) => /* @__PURE__ */ jsx2("div", { style: { marginBottom: "var(--space-4, 16px)", ...style }, className: `vektr-card-header ${className}`, ...props, children });
var CardBody = ({ children, style, className = "", ...props }) => /* @__PURE__ */ jsx2("div", { style: { marginBottom: "var(--space-4, 16px)", ...style }, className: `vektr-card-body ${className}`, ...props, children });
var CardFooter = ({ children, style, className = "", ...props }) => /* @__PURE__ */ jsx2("div", { style: { display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "var(--spacing-brand-gap, 8px)", ...style }, className: `vektr-card-footer ${className}`, ...props, children });

// src/components/Badge.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Badge = ({
  children,
  variant = "success",
  style,
  className = "",
  ...props
}) => {
  const variantStyles = {
    success: {
      backgroundColor: "var(--status-success-bg)",
      color: "var(--status-success-text)",
      border: "1px solid var(--status-success)"
    },
    warning: {
      backgroundColor: "var(--status-warning-bg)",
      color: "var(--status-warning-text)",
      border: "1px solid var(--status-warning)"
    },
    danger: {
      backgroundColor: "var(--status-danger-bg)",
      color: "var(--status-danger-text)",
      border: "1px solid var(--status-danger)"
    },
    info: {
      backgroundColor: "var(--status-info-bg)",
      color: "var(--status-info-text)",
      border: "1px solid var(--status-info)"
    },
    neutral: {
      backgroundColor: "var(--fill-gray-100)",
      color: "var(--text-secondary)",
      border: "1px solid var(--border-default)"
    }
  };
  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    padding: "var(--space-1, 4px) var(--space-3, 12px)",
    borderRadius: "var(--radius-full, 9999px)",
    fontSize: "var(--caption-base, 12px)",
    fontWeight: 600,
    lineHeight: 1,
    ...variantStyles[variant],
    ...style
  };
  return /* @__PURE__ */ jsx3("span", { style: badgeStyle, className: `vektr-badge vektr-badge-${variant} ${className}`, ...props, children });
};

// src/components/Input.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var Input = ({
  label,
  helperText,
  errorText,
  style,
  className = "",
  disabled,
  ...props
}) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-1, 4px)",
    width: "100%",
    fontFamily: "var(--font-body, inherit)"
  };
  const labelStyle = {
    fontSize: "var(--label-base, 12px)",
    fontWeight: 600,
    color: "var(--text-primary)"
  };
  const inputStyle = {
    padding: "var(--spacing-brand-padding, 12px)",
    borderRadius: "var(--radius-brand, 8px)",
    border: `var(--border-width-default, 1.5px) solid ${errorText ? "var(--status-danger)" : "var(--border-default)"}`,
    backgroundColor: disabled ? "var(--surface-disabled)" : "var(--surface-base)",
    color: "var(--text-primary)",
    fontSize: "var(--body-base, 14px)",
    outline: "none",
    transition: "border-color 0.2s ease-in-out",
    ...style
  };
  return /* @__PURE__ */ jsxs2("div", { style: containerStyle, className: `vektr-input-wrapper ${className}`, children: [
    label && /* @__PURE__ */ jsx4("label", { style: labelStyle, children: label }),
    /* @__PURE__ */ jsx4(
      "input",
      {
        style: inputStyle,
        disabled,
        className: `vektr-input ${errorText ? "vektr-input-error" : ""}`,
        ...props
      }
    ),
    errorText ? /* @__PURE__ */ jsx4("span", { style: { fontSize: "var(--caption-sm, 11px)", color: "var(--status-danger-text)" }, children: errorText }) : helperText ? /* @__PURE__ */ jsx4("span", { style: { fontSize: "var(--caption-sm, 11px)", color: "var(--text-muted)" }, children: helperText }) : null
  ] });
};

// src/components/VektrProvider.tsx
import { createContext, useContext, useState, useEffect } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var VektrThemeContext = createContext(void 0);
var VektrProvider = ({
  children,
  defaultTheme = "light",
  defaultBrand = "default"
}) => {
  const [theme, setThemeState] = useState(defaultTheme);
  const [brand, setBrandState] = useState(defaultBrand);
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-brand", brand);
  }, [brand]);
  const toggleTheme = () => {
    setThemeState((prev) => prev === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ jsx5(
    VektrThemeContext.Provider,
    {
      value: {
        theme,
        brand,
        setTheme: setThemeState,
        setBrand: setBrandState,
        toggleTheme
      },
      children
    }
  );
};
var useVektrTheme = () => {
  const context = useContext(VektrThemeContext);
  if (!context) {
    throw new Error("useVektrTheme must be used within a VektrProvider");
  }
  return context;
};
export {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  VektrProvider,
  useVektrTheme
};
