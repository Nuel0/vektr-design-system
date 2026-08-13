"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/react/index.ts
var react_exports = {};
__export(react_exports, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  Alert: () => Alert,
  AlertDescription: () => AlertDescription,
  AlertTitle: () => AlertTitle,
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarImage: () => AvatarImage,
  Badge: () => Badge,
  Breadcrumb: () => Breadcrumb,
  BreadcrumbItem: () => BreadcrumbItem,
  BreadcrumbLink: () => BreadcrumbLink,
  BreadcrumbList: () => BreadcrumbList,
  BreadcrumbPage: () => BreadcrumbPage,
  BreadcrumbSeparator: () => BreadcrumbSeparator,
  Button: () => Button,
  Card: () => Card,
  CardBody: () => CardBody,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  Drawer: () => Drawer,
  DrawerClose: () => DrawerClose,
  DrawerContent: () => DrawerContent,
  DrawerDescription: () => DrawerDescription,
  DrawerHeader: () => DrawerHeader,
  DrawerTitle: () => DrawerTitle,
  DrawerTrigger: () => DrawerTrigger,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  Input: () => Input,
  Label: () => Label2,
  Pagination: () => Pagination,
  PaginationContent: () => PaginationContent,
  PaginationItem: () => PaginationItem,
  PaginationLink: () => PaginationLink,
  PaginationNext: () => PaginationNext,
  PaginationPrevious: () => PaginationPrevious,
  Popover: () => Popover,
  PopoverContent: () => PopoverContent,
  PopoverTrigger: () => PopoverTrigger,
  RadioGroup: () => RadioGroup,
  RadioGroupItem: () => RadioGroupItem,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  Separator: () => Separator2,
  Skeleton: () => Skeleton,
  Switch: () => Switch,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCell: () => TableCell,
  TableFooter: () => TableFooter,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger,
  Textarea: () => Textarea,
  ToastProvider: () => ToastProvider,
  Tooltip: () => Tooltip,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  VektrProvider: () => VektrProvider,
  themeScriptString: () => themeScriptString,
  useToast: () => useToast,
  useVektrTheme: () => useVektrTheme
});
module.exports = __toCommonJS(react_exports);

// src/components/VektrProvider.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var VektrThemeContext = (0, import_react.createContext)(void 0);
var themeScriptString = `(function() {
  try {
    var t = localStorage.getItem('vektr-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var b = localStorage.getItem('vektr-brand') || 'default';
    document.documentElement.dataset.theme = t;
    document.documentElement.dataset.brand = b;
  } catch (e) {}
})();`;
var VektrProvider = ({
  children,
  defaultTheme = "light",
  defaultBrand = "default"
}) => {
  const [theme, setThemeState] = (0, import_react.useState)(() => {
    if (typeof window !== "undefined") {
      const domTheme = document.documentElement.dataset.theme;
      if (domTheme) return domTheme;
      const storedTheme = localStorage.getItem("vektr-theme");
      if (storedTheme) return storedTheme;
    }
    return defaultTheme;
  });
  const [brand, setBrandState] = (0, import_react.useState)(() => {
    if (typeof window !== "undefined") {
      const domBrand = document.documentElement.dataset.brand;
      if (domBrand) return domBrand;
      const storedBrand = localStorage.getItem("vektr-brand");
      if (storedBrand) return storedBrand;
    }
    return defaultBrand;
  });
  (0, import_react.useEffect)(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("vektr-theme", theme);
    } catch (e) {
    }
  }, [theme]);
  (0, import_react.useEffect)(() => {
    const root = document.documentElement;
    root.setAttribute("data-brand", brand);
    try {
      localStorage.setItem("vektr-brand", brand);
    } catch (e) {
    }
  }, [brand]);
  const toggleTheme = () => {
    setThemeState((prev) => prev === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  const context = (0, import_react.useContext)(VektrThemeContext);
  if (!context) {
    throw new Error("useVektrTheme must be used within a VektrProvider");
  }
  return context;
};

// src/components/Button.tsx
var import_react2 = __toESM(require("react"), 1);
var import_react_slot = require("@radix-ui/react-slot");
var import_clsx = require("clsx");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Button = import_react2.default.forwardRef(
  ({
    children,
    variant = "primary",
    size = "md",
    isLoading = false,
    leftIcon,
    rightIcon,
    disabled,
    asChild = false,
    className,
    ...props
  }, ref) => {
    const Comp = asChild ? import_react_slot.Slot : "button";
    const isButtonDisabled = disabled || isLoading;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Comp,
      {
        ref,
        disabled: asChild ? void 0 : isButtonDisabled,
        "data-variant": variant,
        "data-size": size,
        "data-loading": isLoading ? "true" : void 0,
        "data-disabled": isButtonDisabled ? "true" : void 0,
        "aria-busy": isLoading ? true : void 0,
        "aria-disabled": isButtonDisabled ? true : void 0,
        className: (0, import_clsx.clsx)("vektr-button", className),
        ...props,
        children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "vektr-button-spinner", "aria-live": "polite", children: "\u23F3" }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
          leftIcon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "vektr-button-icon", children: leftIcon }),
          asChild ? children : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children }),
          rightIcon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "vektr-button-icon", children: rightIcon })
        ] })
      }
    );
  }
);
Button.displayName = "Button";

// src/components/Input.tsx
var import_react3 = __toESM(require("react"), 1);
var import_clsx2 = require("clsx");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Input = import_react3.default.forwardRef(
  ({ label, helperText, errorText, id: customId, className, disabled, ...props }, ref) => {
    const generatedId = (0, import_react3.useId)();
    const inputId = customId || generatedId;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    const describedBy = [
      errorText ? errorId : null,
      helperText && !errorText ? helperId : null
    ].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: (0, import_clsx2.clsx)("vektr-input-wrapper", className), "data-disabled": disabled ? "true" : void 0, children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: inputId, className: "vektr-input-label", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "input",
        {
          ref,
          id: inputId,
          disabled,
          "aria-invalid": Boolean(errorText),
          "aria-describedby": describedBy,
          "data-invalid": Boolean(errorText) ? "true" : void 0,
          "data-disabled": disabled ? "true" : void 0,
          className: "vektr-input",
          ...props
        }
      ),
      errorText ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { id: errorId, role: "alert", className: "vektr-input-error-text", children: errorText }) : helperText ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { id: helperId, className: "vektr-input-helper-text", children: helperText }) : null
    ] });
  }
);
Input.displayName = "Input";

// src/components/Textarea.tsx
var import_react4 = __toESM(require("react"), 1);
var import_clsx3 = require("clsx");
var import_jsx_runtime4 = require("react/jsx-runtime");
var Textarea = import_react4.default.forwardRef(
  ({ label, helperText, errorText, id: customId, className, disabled, ...props }, ref) => {
    const generatedId = (0, import_react4.useId)();
    const textareaId = customId || generatedId;
    const helperId = `${textareaId}-helper`;
    const errorId = `${textareaId}-error`;
    const describedBy = [
      errorText ? errorId : null,
      helperText && !errorText ? helperId : null
    ].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: (0, import_clsx3.clsx)("vektr-textarea-wrapper", className), "data-disabled": disabled ? "true" : void 0, children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { htmlFor: textareaId, className: "vektr-textarea-label", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "textarea",
        {
          ref,
          id: textareaId,
          disabled,
          "aria-invalid": Boolean(errorText),
          "aria-describedby": describedBy,
          "data-invalid": Boolean(errorText) ? "true" : void 0,
          "data-disabled": disabled ? "true" : void 0,
          className: "vektr-textarea",
          ...props
        }
      ),
      errorText ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { id: errorId, role: "alert", className: "vektr-textarea-error-text", children: errorText }) : helperText ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { id: helperId, className: "vektr-textarea-helper-text", children: helperText }) : null
    ] });
  }
);
Textarea.displayName = "Textarea";

// src/components/Select.tsx
var import_react5 = __toESM(require("react"), 1);
var SelectPrimitive = __toESM(require("@radix-ui/react-select"), 1);
var import_clsx4 = require("clsx");
var import_jsx_runtime5 = require("react/jsx-runtime");
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = import_react5.default.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
  SelectPrimitive.Trigger,
  {
    ref,
    className: (0, import_clsx4.clsx)("vektr-select-trigger", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SelectPrimitive.Icon, { className: "vektr-select-icon", children: "\u25BC" })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectContent = import_react5.default.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  SelectPrimitive.Content,
  {
    ref,
    position,
    className: (0, import_clsx4.clsx)("vektr-select-content", className),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SelectPrimitive.Viewport, { className: "vektr-select-viewport", children })
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectItem = import_react5.default.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
  SelectPrimitive.Item,
  {
    ref,
    className: (0, import_clsx4.clsx)("vektr-select-item", className),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SelectPrimitive.ItemText, { children }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SelectPrimitive.ItemIndicator, { className: "vektr-select-indicator", children: "\u2713" })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectLabel = import_react5.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  SelectPrimitive.Label,
  {
    ref,
    className: (0, import_clsx4.clsx)("vektr-select-label", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

// src/components/Checkbox.tsx
var import_react6 = __toESM(require("react"), 1);
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"), 1);
var import_clsx5 = require("clsx");
var import_jsx_runtime6 = require("react/jsx-runtime");
var Checkbox = import_react6.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  CheckboxPrimitive.Root,
  {
    ref,
    className: (0, import_clsx5.clsx)("vektr-checkbox", className),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CheckboxPrimitive.Indicator, { className: "vektr-checkbox-indicator", children: "\u2713" })
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/Radio.tsx
var import_react7 = __toESM(require("react"), 1);
var RadioGroupPrimitive = __toESM(require("@radix-ui/react-radio-group"), 1);
var import_clsx6 = require("clsx");
var import_jsx_runtime7 = require("react/jsx-runtime");
var RadioGroup = import_react7.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  RadioGroupPrimitive.Root,
  {
    className: (0, import_clsx6.clsx)("vektr-radio-group", className),
    ...props,
    ref
  }
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = import_react7.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  RadioGroupPrimitive.Item,
  {
    ref,
    className: (0, import_clsx6.clsx)("vektr-radio-item", className),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RadioGroupPrimitive.Indicator, { className: "vektr-radio-indicator" })
  }
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/Switch.tsx
var import_react8 = __toESM(require("react"), 1);
var SwitchPrimitives = __toESM(require("@radix-ui/react-switch"), 1);
var import_clsx7 = require("clsx");
var import_jsx_runtime8 = require("react/jsx-runtime");
var Switch = import_react8.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
  SwitchPrimitives.Root,
  {
    className: (0, import_clsx7.clsx)("vektr-switch", className),
    ...props,
    ref,
    children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SwitchPrimitives.Thumb, { className: "vektr-switch-thumb" })
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;

// src/components/Label.tsx
var import_react9 = __toESM(require("react"), 1);
var import_clsx8 = require("clsx");
var import_jsx_runtime9 = require("react/jsx-runtime");
var Label2 = import_react9.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { ref, className: (0, import_clsx8.clsx)("vektr-label", className), ...props })
);
Label2.displayName = "Label";

// src/components/Card.tsx
var import_react10 = __toESM(require("react"), 1);
var import_react_slot2 = require("@radix-ui/react-slot");
var import_clsx9 = require("clsx");
var import_jsx_runtime10 = require("react/jsx-runtime");
var Card = import_react10.default.forwardRef(
  ({ children, variant = "base", asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? import_react_slot2.Slot : "div";
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Comp, { ref, "data-variant": variant, className: (0, import_clsx9.clsx)("vektr-card", className), ...props, children });
  }
);
Card.displayName = "Card";
var CardHeader = import_react10.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { ref, className: (0, import_clsx9.clsx)("vektr-card-header", className), ...props })
);
CardHeader.displayName = "CardHeader";
var CardTitle = import_react10.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { ref, className: (0, import_clsx9.clsx)("vektr-card-title", className), ...props })
);
CardTitle.displayName = "CardTitle";
var CardDescription = import_react10.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { ref, className: (0, import_clsx9.clsx)("vektr-card-description", className), ...props })
);
CardDescription.displayName = "CardDescription";
var CardBody = import_react10.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { ref, className: (0, import_clsx9.clsx)("vektr-card-body", className), ...props })
);
CardBody.displayName = "CardBody";
var CardFooter = import_react10.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { ref, className: (0, import_clsx9.clsx)("vektr-card-footer", className), ...props })
);
CardFooter.displayName = "CardFooter";

// src/components/Badge.tsx
var import_react11 = __toESM(require("react"), 1);
var import_react_slot3 = require("@radix-ui/react-slot");
var import_clsx10 = require("clsx");
var import_jsx_runtime11 = require("react/jsx-runtime");
var Badge = import_react11.default.forwardRef(
  ({ children, variant = "success", asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? import_react_slot3.Slot : "span";
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Comp,
      {
        ref,
        "data-variant": variant,
        className: (0, import_clsx10.clsx)("vektr-badge", className),
        ...props,
        children
      }
    );
  }
);
Badge.displayName = "Badge";

// src/components/Alert.tsx
var import_react12 = __toESM(require("react"), 1);
var import_clsx11 = require("clsx");
var import_jsx_runtime12 = require("react/jsx-runtime");
var Alert = import_react12.default.forwardRef(
  ({ className, variant = "info", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "div",
    {
      ref,
      role: "alert",
      "data-variant": variant,
      className: (0, import_clsx11.clsx)("vektr-alert", className),
      ...props
    }
  )
);
Alert.displayName = "Alert";
var AlertTitle = import_react12.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h5", { ref, className: (0, import_clsx11.clsx)("vektr-alert-title", className), ...props })
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = import_react12.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { ref, className: (0, import_clsx11.clsx)("vektr-alert-description", className), ...props })
);
AlertDescription.displayName = "AlertDescription";

// src/components/Avatar.tsx
var import_react13 = __toESM(require("react"), 1);
var AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"), 1);
var import_clsx12 = require("clsx");
var import_jsx_runtime13 = require("react/jsx-runtime");
var Avatar = import_react13.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  AvatarPrimitive.Root,
  {
    ref,
    className: (0, import_clsx12.clsx)("vektr-avatar", className),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = import_react13.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  AvatarPrimitive.Image,
  {
    ref,
    className: (0, import_clsx12.clsx)("vektr-avatar-image", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = import_react13.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: (0, import_clsx12.clsx)("vektr-avatar-fallback", className),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// src/components/Dialog.tsx
var import_react14 = __toESM(require("react"), 1);
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"), 1);
var import_clsx13 = require("clsx");
var import_jsx_runtime14 = require("react/jsx-runtime");
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = import_react14.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
  DialogPrimitive.Overlay,
  {
    ref,
    className: (0, import_clsx13.clsx)("vektr-dialog-overlay", className),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = import_react14.default.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DialogOverlay, {}),
  /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    DialogPrimitive.Content,
    {
      ref,
      className: (0, import_clsx13.clsx)("vektr-dialog-content", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DialogPrimitive.Close, { className: "vektr-dialog-close", children: "\u2715" })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = import_react14.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { ref, className: (0, import_clsx13.clsx)("vektr-dialog-header", className), ...props })
);
DialogHeader.displayName = "DialogHeader";
var DialogTitle = import_react14.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
  DialogPrimitive.Title,
  {
    ref,
    className: (0, import_clsx13.clsx)("vektr-dialog-title", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = import_react14.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
  DialogPrimitive.Description,
  {
    ref,
    className: (0, import_clsx13.clsx)("vektr-dialog-description", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/Drawer.tsx
var import_react15 = __toESM(require("react"), 1);
var DialogPrimitive2 = __toESM(require("@radix-ui/react-dialog"), 1);
var import_clsx14 = require("clsx");
var import_jsx_runtime15 = require("react/jsx-runtime");
var Drawer = DialogPrimitive2.Root;
var DrawerTrigger = DialogPrimitive2.Trigger;
var DrawerClose = DialogPrimitive2.Close;
var DrawerContent = import_react15.default.forwardRef(({ className, children, side = "right", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(DialogPrimitive2.Portal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogPrimitive2.Overlay, { className: "vektr-drawer-overlay" }),
  /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    DialogPrimitive2.Content,
    {
      ref,
      "data-side": side,
      className: (0, import_clsx14.clsx)("vektr-drawer-content", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogPrimitive2.Close, { className: "vektr-drawer-close", children: "\u2715" })
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = import_react15.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { ref, className: (0, import_clsx14.clsx)("vektr-drawer-header", className), ...props })
);
DrawerHeader.displayName = "DrawerHeader";
var DrawerTitle = import_react15.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
  DialogPrimitive2.Title,
  {
    ref,
    className: (0, import_clsx14.clsx)("vektr-drawer-title", className),
    ...props
  }
));
DrawerTitle.displayName = DialogPrimitive2.Title.displayName;
var DrawerDescription = import_react15.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
  DialogPrimitive2.Description,
  {
    ref,
    className: (0, import_clsx14.clsx)("vektr-drawer-description", className),
    ...props
  }
));
DrawerDescription.displayName = DialogPrimitive2.Description.displayName;

// src/components/Dropdown.tsx
var import_react16 = __toESM(require("react"), 1);
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"), 1);
var import_clsx15 = require("clsx");
var import_jsx_runtime16 = require("react/jsx-runtime");
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuContent = import_react16.default.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: (0, import_clsx15.clsx)("vektr-dropdown-content", className),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = import_react16.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: (0, import_clsx15.clsx)("vektr-dropdown-item", className),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuSeparator = import_react16.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: (0, import_clsx15.clsx)("vektr-dropdown-separator", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

// src/components/Tooltip.tsx
var import_react17 = __toESM(require("react"), 1);
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"), 1);
var import_clsx16 = require("clsx");
var import_jsx_runtime17 = require("react/jsx-runtime");
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = import_react17.default.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: (0, import_clsx16.clsx)("vektr-tooltip-content", className),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/components/Popover.tsx
var import_react18 = __toESM(require("react"), 1);
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"), 1);
var import_clsx17 = require("clsx");
var import_jsx_runtime18 = require("react/jsx-runtime");
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = import_react18.default.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(PopoverPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: (0, import_clsx17.clsx)("vektr-popover-content", className),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// src/components/Tabs.tsx
var import_react19 = __toESM(require("react"), 1);
var TabsPrimitive = __toESM(require("@radix-ui/react-tabs"), 1);
var import_clsx18 = require("clsx");
var import_jsx_runtime19 = require("react/jsx-runtime");
var Tabs = TabsPrimitive.Root;
var TabsList = import_react19.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
  TabsPrimitive.List,
  {
    ref,
    className: (0, import_clsx18.clsx)("vektr-tabs-list", className),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = import_react19.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
  TabsPrimitive.Trigger,
  {
    ref,
    className: (0, import_clsx18.clsx)("vektr-tabs-trigger", className),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = import_react19.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
  TabsPrimitive.Content,
  {
    ref,
    className: (0, import_clsx18.clsx)("vektr-tabs-content", className),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// src/components/Accordion.tsx
var import_react20 = __toESM(require("react"), 1);
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"), 1);
var import_clsx19 = require("clsx");
var import_jsx_runtime20 = require("react/jsx-runtime");
var Accordion = AccordionPrimitive.Root;
var AccordionItem = import_react20.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
  AccordionPrimitive.Item,
  {
    ref,
    className: (0, import_clsx19.clsx)("vektr-accordion-item", className),
    ...props
  }
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;
var AccordionTrigger = import_react20.default.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(AccordionPrimitive.Header, { className: "vektr-accordion-header", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: (0, import_clsx19.clsx)("vektr-accordion-trigger", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "vektr-accordion-icon", children: "\u25BC" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = import_react20.default.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
  AccordionPrimitive.Content,
  {
    ref,
    className: (0, import_clsx19.clsx)("vektr-accordion-content", className),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "vektr-accordion-body", children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/Table.tsx
var import_react21 = __toESM(require("react"), 1);
var import_clsx20 = require("clsx");
var import_jsx_runtime21 = require("react/jsx-runtime");
var Table = import_react21.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "vektr-table-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("table", { ref, className: (0, import_clsx20.clsx)("vektr-table", className), ...props }) })
);
Table.displayName = "Table";
var TableHeader = import_react21.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("thead", { ref, className: (0, import_clsx20.clsx)("vektr-table-header", className), ...props })
);
TableHeader.displayName = "TableHeader";
var TableBody = import_react21.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("tbody", { ref, className: (0, import_clsx20.clsx)("vektr-table-body", className), ...props })
);
TableBody.displayName = "TableBody";
var TableFooter = import_react21.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("tfoot", { ref, className: (0, import_clsx20.clsx)("vektr-table-footer", className), ...props })
);
TableFooter.displayName = "TableFooter";
var TableRow = import_react21.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("tr", { ref, className: (0, import_clsx20.clsx)("vektr-table-row", className), ...props })
);
TableRow.displayName = "TableRow";
var TableHead = import_react21.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("th", { ref, className: (0, import_clsx20.clsx)("vektr-table-head", className), ...props })
);
TableHead.displayName = "TableHead";
var TableCell = import_react21.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("td", { ref, className: (0, import_clsx20.clsx)("vektr-table-cell", className), ...props })
);
TableCell.displayName = "TableCell";

// src/components/Toast.tsx
var import_react22 = require("react");
var import_jsx_runtime22 = require("react/jsx-runtime");
var ToastContext = (0, import_react22.createContext)(void 0);
var ToastProvider = ({ children }) => {
  const [toasts, setToasts] = (0, import_react22.useState)([]);
  const toast = (message) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...message, id };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4e3);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(ToastContext.Provider, { value: { toast }, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "vektr-toast-container", "aria-live": "polite", children: toasts.map((t) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { "data-variant": t.variant || "info", className: "vektr-toast", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "vektr-toast-title", children: t.title }),
      t.description && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "vektr-toast-description", children: t.description })
    ] }, t.id)) })
  ] });
};
var useToast = () => {
  const context = (0, import_react22.useContext)(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
};

// src/components/Skeleton.tsx
var import_react23 = __toESM(require("react"), 1);
var import_clsx21 = require("clsx");
var import_jsx_runtime23 = require("react/jsx-runtime");
var Skeleton = import_react23.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { ref, className: (0, import_clsx21.clsx)("vektr-skeleton", className), ...props })
);
Skeleton.displayName = "Skeleton";

// src/components/Separator.tsx
var import_react24 = __toESM(require("react"), 1);
var SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"), 1);
var import_clsx22 = require("clsx");
var import_jsx_runtime24 = require("react/jsx-runtime");
var Separator2 = import_react24.default.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
  SeparatorPrimitive.Root,
  {
    ref,
    decorative,
    orientation,
    className: (0, import_clsx22.clsx)("vektr-separator", className),
    ...props
  }
));
Separator2.displayName = SeparatorPrimitive.Root.displayName;

// src/components/Pagination.tsx
var import_react25 = __toESM(require("react"), 1);
var import_clsx23 = require("clsx");
var import_jsx_runtime25 = require("react/jsx-runtime");
var Pagination = import_react25.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("nav", { ref, "aria-label": "pagination", className: (0, import_clsx23.clsx)("vektr-pagination", className), ...props })
);
Pagination.displayName = "Pagination";
var PaginationContent = import_react25.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("ul", { ref, className: (0, import_clsx23.clsx)("vektr-pagination-content", className), ...props })
);
PaginationContent.displayName = "PaginationContent";
var PaginationItem = import_react25.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { ref, className: (0, import_clsx23.clsx)("vektr-pagination-item", className), ...props })
);
PaginationItem.displayName = "PaginationItem";
var PaginationLink = import_react25.default.forwardRef(
  ({ className, isActive, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "a",
    {
      ref,
      "aria-current": isActive ? "page" : void 0,
      "data-active": isActive ? "true" : void 0,
      className: (0, import_clsx23.clsx)("vektr-pagination-link", className),
      ...props
    }
  )
);
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = import_react25.default.forwardRef(
  ({ className, children = "\u2039 Previous", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(PaginationLink, { ref, className: (0, import_clsx23.clsx)("vektr-pagination-prev", className), ...props, children })
);
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = import_react25.default.forwardRef(
  ({ className, children = "Next \u203A", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(PaginationLink, { ref, className: (0, import_clsx23.clsx)("vektr-pagination-next", className), ...props, children })
);
PaginationNext.displayName = "PaginationNext";

// src/components/Breadcrumb.tsx
var import_react26 = __toESM(require("react"), 1);
var import_clsx24 = require("clsx");
var import_jsx_runtime26 = require("react/jsx-runtime");
var Breadcrumb = import_react26.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("nav", { ref, "aria-label": "breadcrumb", className: (0, import_clsx24.clsx)("vektr-breadcrumb", className), ...props })
);
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = import_react26.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("ol", { ref, className: (0, import_clsx24.clsx)("vektr-breadcrumb-list", className), ...props })
);
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = import_react26.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("li", { ref, className: (0, import_clsx24.clsx)("vektr-breadcrumb-item", className), ...props })
);
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = import_react26.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("a", { ref, className: (0, import_clsx24.clsx)("vektr-breadcrumb-link", className), ...props })
);
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = import_react26.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "span",
    {
      ref,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: (0, import_clsx24.clsx)("vektr-breadcrumb-page", className),
      ...props
    }
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = ({ children = "/", className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("li", { role: "presentation", "aria-hidden": "true", className: (0, import_clsx24.clsx)("vektr-breadcrumb-separator", className), ...props, children });
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Label,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  ToastProvider,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  VektrProvider,
  themeScriptString,
  useToast,
  useVektrTheme
});
