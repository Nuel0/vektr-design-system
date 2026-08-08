/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
  "50": "#eef2ff",
  "100": "#c7d2fe",
  "200": "#a5b4fc",
  "300": "#818cf8",
  "400": "#a5b4fc",
  "500": "#6366f1",
  "600": "#4f46e5",
  "700": "#4338ca",
  "800": "#3730a3",
  "900": "#312e81",
  "primary": "#4f46e5",
  "primary-hover": "#4338ca",
  "primary-active": "#3730a3"
},
      surface: {
  "base": "#ffffff",
  "raised": "#f9fafb",
  "sunken": "#f3f4f6",
  "overlay": "rgba(0, 0, 0, 0.5)",
  "disabled": "#f3f4f6",
  "hover": "#f3f4f6",
  "active": "#e5e7eb",
  "inverse": "#111827"
},
      textColor: {
  "primary": "#111827",
  "secondary": "#4b5563",
  "muted": "#9ca3af",
  "inverse": "#ffffff",
  "disabled": "#d1d5db",
  "black": "#000000"
},
      borderColor: {
  "default": "#e5e7eb",
  "strong": "#d1d5db",
  "focus": "#4f46e5",
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
  "20": "80px"
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
