"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/tokens/index.ts
var tokens_exports = {};
__export(tokens_exports, {
  darkTokens: () => darkTokens,
  default: () => tokens_default,
  tokens: () => tokens,
  typography: () => typography
});
module.exports = __toCommonJS(tokens_exports);
var tokens = {
  "color": {
    "gray": {
      "50": "#F9FAFB",
      "100": "#F3F4F6",
      "200": "#E5E7EB",
      "300": "#D1D5DB",
      "400": "#9CA3AF",
      "500": "#6B7280",
      "600": "#4B5563",
      "700": "#374151",
      "800": "#1F2937",
      "900": "#111827"
    },
    "slate": {
      "100": "#F1F5F9",
      "200": "#E2E8F0",
      "300": "#CBD5E1",
      "400": "#94A3B8",
      "500": "#64748B",
      "600": "#475569",
      "700": "#334155",
      "800": "#1E293B",
      "900": "#0F172A",
      "950": "#020617"
    },
    "green": {
      "100": "#DCFCE7",
      "300": "#86EFAC",
      "500": "#22C55E",
      "600": "#16A34A",
      "800": "#166534",
      "950": "#052E16"
    },
    "red": {
      "100": "#FEE2E2",
      "300": "#FCA5A5",
      "400": "#EF4444",
      "600": "#DC2626",
      "700": "#B91C1C",
      "800": "#991B1B",
      "950": "#450A0A"
    },
    "amber": {
      "100": "#FEF3C7",
      "300": "#FCD34D",
      "500": "#F59E0B",
      "600": "#D97706",
      "800": "#92400E",
      "950": "#451A03"
    },
    "blue": {
      "100": "#DBEAFE",
      "300": "#93C5FD",
      "500": "#3B82F6",
      "600": "#2563EB",
      "800": "#1E40AF",
      "950": "#172554"
    },
    "white": "#FFFFFF",
    "black": "#000000"
  },
  "brand": {
    "50": "#EEF2FF",
    "100": "#E0E7FF",
    "200": "#C7D2FE",
    "300": "#A5B4FC",
    "400": "#818CF8",
    "500": "#6366F1",
    "600": "#4F46E5",
    "700": "#4338CA",
    "800": "#3730A3",
    "900": "#312E81"
  },
  "neutral": {
    "50": "#F8FAFC",
    "100": "#F1F5F9",
    "200": "#E2E8F0",
    "300": "#CBD5E1",
    "400": "#94A3B8",
    "500": "#64748B",
    "600": "#475569",
    "700": "#334155",
    "800": "#1E293B",
    "900": "#0F172A"
  },
  "button": {
    "primary-bg": "Semantic/action/primary",
    "primary-fg": "Semantic/text/inverse",
    "primary-border": "Semantic/action/primary",
    "primary-hover-bg": "Semantic/action/primary-hover",
    "secondary-bg": "Semantic/surface/raised",
    "secondary-fg": "Semantic/text/primary",
    "secondary-border": "Semantic/border/default",
    "danger-bg": "Semantic/action/danger",
    "danger-fg": "#ffffff",
    "danger-border": "Semantic/action/danger",
    "ghost-bg": "transparent",
    "ghost-fg": "Semantic/text/primary",
    "outline-bg": "transparent",
    "outline-fg": "Semantic/action/primary",
    "outline-border": "Semantic/action/primary"
  },
  "badge": {
    "success-bg": "Semantic/status/success-bg",
    "success-text": "Semantic/status/success-text",
    "success-border": "Semantic/status/success",
    "warning-bg": "Semantic/status/warning-bg",
    "warning-text": "Semantic/status/warning-text",
    "warning-border": "Semantic/status/warning",
    "danger-bg": "Semantic/status/danger-bg",
    "danger-text": "Semantic/status/danger-text",
    "danger-border": "Semantic/status/danger",
    "info-bg": "Semantic/status/info-bg",
    "info-text": "Semantic/status/info-text",
    "info-border": "Semantic/status/info",
    "neutral-bg": "Semantic/surface/subtle",
    "neutral-text": "Semantic/text/secondary",
    "neutral-border": "Semantic/border/default"
  },
  "input": {
    "bg": "Semantic/surface/base",
    "bg-disabled": "Semantic/surface/subtle",
    "border": "Semantic/border/default",
    "border-focus": "Semantic/border/focus",
    "border-error": "Semantic/status/danger",
    "text": "Semantic/text/primary",
    "label-text": "Semantic/text/primary",
    "helper-text": "Semantic/text/muted",
    "error-text": "Semantic/status/danger-text"
  },
  "card": {
    "bg": "Semantic/surface/base",
    "bg-raised": "Semantic/surface/raised",
    "bg-sunken": "Semantic/surface/sunken",
    "bg-inverse": "Semantic/surface/inverse",
    "border": "Semantic/border/default",
    "text": "Semantic/text/primary",
    "text-inverse": "Semantic/text/inverse"
  },
  "nav": {
    "bg": "Semantic/surface/base",
    "text": "Semantic/text/secondary",
    "text-active": "Semantic/action/primary"
  },
  "table": {
    "header-bg": "Semantic/surface/sunken",
    "border": "Semantic/border/default"
  },
  "modal": {
    "bg": "Semantic/surface/raised",
    "overlay": "Semantic/surface/overlay"
  }
};
var darkTokens = {
  "color": {
    "gray": {
      "50": "#F9FAFB",
      "100": "#F3F4F6",
      "200": "#E5E7EB",
      "300": "#D1D5DB",
      "400": "#9CA3AF",
      "500": "#6B7280",
      "600": "#4B5563",
      "700": "#374151",
      "800": "#1F2937",
      "900": "#111827"
    },
    "slate": {
      "100": "#F1F5F9",
      "200": "#E2E8F0",
      "300": "#CBD5E1",
      "400": "#94A3B8",
      "500": "#64748B",
      "600": "#475569",
      "700": "#334155",
      "800": "#1E293B",
      "900": "#0F172A",
      "950": "#020617"
    },
    "green": {
      "100": "#DCFCE7",
      "300": "#86EFAC",
      "500": "#22C55E",
      "600": "#16A34A",
      "800": "#166534",
      "950": "#052E16"
    },
    "red": {
      "100": "#FEE2E2",
      "300": "#FCA5A5",
      "400": "#EF4444",
      "600": "#DC2626",
      "700": "#B91C1C",
      "800": "#991B1B",
      "950": "#450A0A"
    },
    "amber": {
      "100": "#FEF3C7",
      "300": "#FCD34D",
      "500": "#F59E0B",
      "600": "#D97706",
      "800": "#92400E",
      "950": "#451A03"
    },
    "blue": {
      "100": "#DBEAFE",
      "300": "#93C5FD",
      "500": "#3B82F6",
      "600": "#2563EB",
      "800": "#1E40AF",
      "950": "#172554"
    },
    "white": "#FFFFFF",
    "black": "#000000"
  },
  "brand": {
    "50": "#EEF2FF",
    "100": "#E0E7FF",
    "200": "#C7D2FE",
    "300": "#A5B4FC",
    "400": "#818CF8",
    "500": "#6366F1",
    "600": "#4F46E5",
    "700": "#4338CA",
    "800": "#3730A3",
    "900": "#312E81"
  },
  "neutral": {
    "50": "#F8FAFC",
    "100": "#F1F5F9",
    "200": "#E2E8F0",
    "300": "#CBD5E1",
    "400": "#94A3B8",
    "500": "#64748B",
    "600": "#475569",
    "700": "#334155",
    "800": "#1E293B",
    "900": "#0F172A"
  },
  "button": {
    "primary-bg": "Semantic/action/primary",
    "primary-fg": "Semantic/text/inverse",
    "primary-border": "Semantic/action/primary",
    "primary-hover-bg": "Semantic/action/primary-hover",
    "secondary-bg": "Semantic/surface/raised",
    "secondary-fg": "Semantic/text/primary",
    "secondary-border": "Semantic/border/default",
    "danger-bg": "Semantic/action/danger",
    "danger-fg": "#ffffff",
    "danger-border": "Semantic/action/danger",
    "ghost-bg": "transparent",
    "ghost-fg": "Semantic/text/primary",
    "outline-bg": "transparent",
    "outline-fg": "Semantic/action/primary",
    "outline-border": "Semantic/action/primary"
  },
  "badge": {
    "success-bg": "Semantic/status/success-bg",
    "success-text": "Semantic/status/success-text",
    "success-border": "Semantic/status/success",
    "warning-bg": "Semantic/status/warning-bg",
    "warning-text": "Semantic/status/warning-text",
    "warning-border": "Semantic/status/warning",
    "danger-bg": "Semantic/status/danger-bg",
    "danger-text": "Semantic/status/danger-text",
    "danger-border": "Semantic/status/danger",
    "info-bg": "Semantic/status/info-bg",
    "info-text": "Semantic/status/info-text",
    "info-border": "Semantic/status/info",
    "neutral-bg": "Semantic/surface/subtle",
    "neutral-text": "Semantic/text/secondary",
    "neutral-border": "Semantic/border/default"
  },
  "input": {
    "bg": "Semantic/surface/base",
    "bg-disabled": "Semantic/surface/subtle",
    "border": "Semantic/border/default",
    "border-focus": "Semantic/border/focus",
    "border-error": "Semantic/status/danger",
    "text": "Semantic/text/primary",
    "label-text": "Semantic/text/primary",
    "helper-text": "Semantic/text/muted",
    "error-text": "Semantic/status/danger-text"
  },
  "card": {
    "bg": "Semantic/surface/base",
    "bg-raised": "Semantic/surface/raised",
    "bg-sunken": "Semantic/surface/sunken",
    "bg-inverse": "Semantic/surface/inverse",
    "border": "Semantic/border/default",
    "text": "Semantic/text/primary",
    "text-inverse": "Semantic/text/inverse"
  },
  "nav": {
    "bg": "Semantic/surface/base",
    "text": "Semantic/text/secondary",
    "text-active": "Semantic/action/primary"
  },
  "table": {
    "header-bg": "Semantic/surface/sunken",
    "border": "Semantic/border/default"
  },
  "modal": {
    "bg": "Semantic/surface/raised",
    "overlay": "Semantic/surface/overlay"
  }
};
var typography = {
  "Display": {
    "2xl": {
      "fontFamily": "Inter",
      "fontSize": 64,
      "fontWeight": "Bold",
      "lineHeight": 72,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "xl": {
      "fontFamily": "Inter",
      "fontSize": 56,
      "fontWeight": "Bold",
      "lineHeight": 64,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "lg": {
      "fontFamily": "Inter",
      "fontSize": 48,
      "fontWeight": "Bold",
      "lineHeight": 56,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    }
  },
  "Header": {
    "xl": {
      "fontFamily": "Inter",
      "fontSize": 40,
      "fontWeight": "Semi Bold",
      "lineHeight": 48,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "lg": {
      "fontFamily": "Inter",
      "fontSize": 32,
      "fontWeight": "Semi Bold",
      "lineHeight": 40,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "md": {
      "fontFamily": "Inter",
      "fontSize": 28,
      "fontWeight": "Semi Bold",
      "lineHeight": 36,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "sm": {
      "fontFamily": "Inter",
      "fontSize": 24,
      "fontWeight": "Semi Bold",
      "lineHeight": 32,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "xs": {
      "fontFamily": "Inter",
      "fontSize": 20,
      "fontWeight": "Semi Bold",
      "lineHeight": 28,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    }
  },
  "Paragraph": {
    "lg": {
      "fontFamily": "Inter",
      "fontSize": 18,
      "fontWeight": "Regular",
      "lineHeight": 28,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "lg-medium": {
      "fontFamily": "Inter",
      "fontSize": 18,
      "fontWeight": "Medium",
      "lineHeight": 28,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "lg-bold": {
      "fontFamily": "Inter",
      "fontSize": 18,
      "fontWeight": "Bold",
      "lineHeight": 28,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "lg-semibold": {
      "fontFamily": "Inter",
      "fontSize": 18,
      "fontWeight": "Semi Bold",
      "lineHeight": 24,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "base": {
      "fontFamily": "Inter",
      "fontSize": 16,
      "fontWeight": "Regular",
      "lineHeight": 26,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "base-medium": {
      "fontFamily": "Inter",
      "fontSize": 16,
      "fontWeight": "Medium",
      "lineHeight": 26,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "base-bold": {
      "fontFamily": "Inter",
      "fontSize": 16,
      "fontWeight": "Bold",
      "lineHeight": 26,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "sm": {
      "fontFamily": "Inter",
      "fontSize": 14,
      "fontWeight": "Regular",
      "lineHeight": 22,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "sm-medium": {
      "fontFamily": "Inter",
      "fontSize": 14,
      "fontWeight": "Medium",
      "lineHeight": 22,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "sm-bold": {
      "fontFamily": "Inter",
      "fontSize": 14,
      "fontWeight": "Bold",
      "lineHeight": 22,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    }
  },
  "Body": {
    "lg": {
      "fontFamily": "Inter",
      "fontSize": 16,
      "fontWeight": "Regular",
      "lineHeight": 24,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "lg-medium": {
      "fontFamily": "Inter",
      "fontSize": 16,
      "fontWeight": "Medium",
      "lineHeight": 24,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "lg-bold": {
      "fontFamily": "Inter",
      "fontSize": 16,
      "fontWeight": "Bold",
      "lineHeight": 24,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "lg-semibold": {
      "fontFamily": "Inter",
      "fontSize": 16,
      "fontWeight": "Semi Bold",
      "lineHeight": 24,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "base": {
      "fontFamily": "Inter",
      "fontSize": 14,
      "fontWeight": "Regular",
      "lineHeight": 20,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "base-medium": {
      "fontFamily": "Inter",
      "fontSize": 14,
      "fontWeight": "Medium",
      "lineHeight": 20,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "base-bold": {
      "fontFamily": "Inter",
      "fontSize": 14,
      "fontWeight": "Bold",
      "lineHeight": 20,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "base-semibold": {
      "fontFamily": "Inter",
      "fontSize": 14,
      "fontWeight": "Semi Bold",
      "lineHeight": 20,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "sm": {
      "fontFamily": "Inter",
      "fontSize": 12,
      "fontWeight": "Regular",
      "lineHeight": 16,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "sm-medium": {
      "fontFamily": "Inter",
      "fontSize": 12,
      "fontWeight": "Medium",
      "lineHeight": 16,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "sm-bold": {
      "fontFamily": "Inter",
      "fontSize": 12,
      "fontWeight": "Bold",
      "lineHeight": 16,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    }
  },
  "Caption": {
    "base": {
      "fontFamily": "Inter",
      "fontSize": 12,
      "fontWeight": "Regular",
      "lineHeight": 16,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "sm": {
      "fontFamily": "Inter",
      "fontSize": 11,
      "fontWeight": "Regular",
      "lineHeight": 14,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "sm-medium": {
      "fontFamily": "Inter",
      "fontSize": 11,
      "fontWeight": "Medium",
      "lineHeight": 14,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    }
  },
  "Footer": {
    "base": {
      "fontFamily": "Inter",
      "fontSize": 13,
      "fontWeight": "Regular",
      "lineHeight": 20,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    },
    "sm": {
      "fontFamily": "Inter",
      "fontSize": 11,
      "fontWeight": "Regular",
      "lineHeight": 16,
      "letterSpacing": 0,
      "paragraphSpacing": 0
    }
  },
  "Label": {
    "base": {
      "fontFamily": "Inter",
      "fontSize": 12,
      "fontWeight": "Medium",
      "lineHeight": 16,
      "letterSpacing": 4,
      "paragraphSpacing": 0
    }
  }
};
var tokens_default = tokens;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  darkTokens,
  tokens,
  typography
});
