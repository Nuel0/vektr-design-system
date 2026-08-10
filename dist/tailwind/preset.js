/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
  "50": "#F8FAFC",
  "100": "#F1F5F9",
  "200": "#E2E8F0",
  "300": "#CBD5E1",
  "400": "#94A3B8",
  "500": "#64748B",
  "600": "#4F46E5",
  "700": "#334155",
  "800": "#3730A3",
  "900": "#0F172A",
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
      surface: {
  "base": "#FFFFFF",
  "raised": "#F9FAFB",
  "sunken": "#F3F4F6",
  "overlay": "rgba(0, 0, 0, 0.5)",
  "inverse": "#111827",
  "subtle": "#F3F4F6"
},
      textColor: {
  "primary": "#111827",
  "secondary": "#4B5563",
  "muted": "#9CA3AF",
  "inverse": "#FFFFFF",
  "disabled": "#D1D5DB"
},
      borderColor: {
  "default": "#E5E7EB",
  "strong": "#D1D5DB",
  "focus": "#4F46E5",
  "width-thin": "1px",
  "width-default": "1.5px",
  "width-thick": "2px",
  "width-accent": "3px",
  "brand-width": "1px"
},
      spacing: {
  "1": "4px",
  "2": "8px",
  "3": "12px",
  "4": "16px",
  "5": "20px",
  "6": "24px",
  "8": "32px",
  "10": "40px",
  "12": "48px",
  "16": "64px",
  "20": "80px",
  "0-5": "2px",
  "0-75": "3px",
  "1-5": "6px",
  "2-5": "10px"
},
      borderRadius: {
  "none": "0px",
  "sm": "4px",
  "md": "8px",
  "lg": "16px",
  "xl": "40px",
  "xxl": "48px",
  "full": "9999px",
  "brand": "8px"
},
      fontSize: {
  "lg": "16px",
  "xl": "40px",
  "2xl": "64px",
  "xs": "20px",
  "sm": "12px",
  "md": "28px",
  "base": "14px"
}
    }
  }
};
