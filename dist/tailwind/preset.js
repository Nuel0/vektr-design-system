/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
  "50": "#f8fafc",
  "100": "#f1f5f9",
  "200": "#e2e8f0",
  "300": "#cbd5e1",
  "400": "#94a3b8",
  "500": "#64748b",
  "600": "#4f46e5",
  "700": "#334155",
  "800": "#3730a3",
  "900": "#0f172a",
  "gray": {
    "50": "#f9fafb",
    "100": "#f3f4f6",
    "200": "#e5e7eb",
    "300": "#d1d5db",
    "400": "#9ca3af",
    "500": "#6b7280",
    "600": "#4b5563",
    "700": "#374151",
    "800": "#1f2937",
    "900": "#111827"
  },
  "slate": {
    "100": "#f1f5f9",
    "200": "#e2e8f0",
    "300": "#cbd5e1",
    "400": "#94a3b8",
    "500": "#64748b",
    "600": "#475569",
    "700": "#334155",
    "800": "#1e293b",
    "900": "#0f172a",
    "950": "#020617"
  },
  "green": {
    "100": "#dcfce7",
    "300": "#86efac",
    "500": "#22c55e",
    "600": "#16a34a",
    "800": "#166534",
    "950": "#052e16"
  },
  "red": {
    "100": "#fee2e2",
    "300": "#fca5a5",
    "400": "#ef4444",
    "600": "#dc2626",
    "700": "#b91c1c",
    "800": "#991b1b",
    "950": "#450a0a"
  },
  "amber": {
    "100": "#fef3c7",
    "300": "#fcd34d",
    "500": "#f59e0b",
    "600": "#d97706",
    "800": "#92400e",
    "950": "#451a03"
  },
  "blue": {
    "100": "#dbeafe",
    "300": "#93c5fd",
    "500": "#3b82f6",
    "600": "#2563eb",
    "800": "#1e40af",
    "950": "#172554"
  },
  "white": "#ffffff",
  "black": "#000000"
},
      surface: {
  "base": "#ffffff",
  "raised": "#f9fafb",
  "sunken": "#f3f4f6",
  "subtle": "#f3f4f6",
  "overlay": "rgba(0, 0, 0, 0.5)",
  "inverse": "#111827"
},
      textColor: {
  "primary": "#111827",
  "secondary": "#4b5563",
  "muted": "#9ca3af",
  "inverse": "#ffffff",
  "disabled": "#d1d5db"
},
      borderColor: {
  "default": "#e5e7eb",
  "strong": "#d1d5db",
  "focus": "#4f46e5",
  "brand-width": "$brand-border",
  "width-thin": "1px",
  "width-default": "1.5px",
  "width-thick": "2px",
  "width-accent": "3px"
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
  "20": "80px"
},
      borderRadius: {
  "brand": "$brand-radius",
  "none": "0px",
  "sm": "4px",
  "md": "8px",
  "lg": "16px",
  "xl": "40px",
  "xxl": "48px",
  "full": "9999px"
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
