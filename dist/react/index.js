"use client";

// src/components/VektrProvider.tsx
import { createContext, useContext, useState, useEffect } from "react";
import { jsx } from "react/jsx-runtime";
var VektrThemeContext = createContext(void 0);
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
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== "undefined") {
      const domTheme = document.documentElement.dataset.theme;
      if (domTheme) return domTheme;
      const storedTheme = localStorage.getItem("vektr-theme");
      if (storedTheme) return storedTheme;
    }
    return defaultTheme;
  });
  const [brand, setBrandState] = useState(() => {
    if (typeof window !== "undefined") {
      const domBrand = document.documentElement.dataset.brand;
      if (domBrand) return domBrand;
      const storedBrand = localStorage.getItem("vektr-brand");
      if (storedBrand) return storedBrand;
    }
    return defaultBrand;
  });
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("vektr-theme", theme);
    } catch (e) {
    }
  }, [theme]);
  useEffect(() => {
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
  return /* @__PURE__ */ jsx(
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

// src/components/Button.tsx
import React2 from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
var Button = React2.forwardRef(
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
    const Comp = asChild ? Slot : "button";
    const isButtonDisabled = disabled || isLoading;
    return /* @__PURE__ */ jsx2(
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
        className: clsx("vektr-button", className),
        ...props,
        children: isLoading ? /* @__PURE__ */ jsx2("span", { className: "vektr-button-spinner", "aria-live": "polite", children: "\u23F3" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          leftIcon && /* @__PURE__ */ jsx2("span", { className: "vektr-button-icon", children: leftIcon }),
          asChild ? children : /* @__PURE__ */ jsx2("span", { children }),
          rightIcon && /* @__PURE__ */ jsx2("span", { className: "vektr-button-icon", children: rightIcon })
        ] })
      }
    );
  }
);
Button.displayName = "Button";

// src/components/Input.tsx
import React3, { useId } from "react";
import { clsx as clsx2 } from "clsx";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Input = React3.forwardRef(
  ({ label, helperText, errorText, id: customId, className, disabled, ...props }, ref) => {
    const generatedId = useId();
    const inputId = customId || generatedId;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    const describedBy = [
      errorText ? errorId : null,
      helperText && !errorText ? helperId : null
    ].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ jsxs2("div", { className: clsx2("vektr-input-wrapper", className), "data-disabled": disabled ? "true" : void 0, children: [
      label && /* @__PURE__ */ jsx3("label", { htmlFor: inputId, className: "vektr-input-label", children: label }),
      /* @__PURE__ */ jsx3(
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
      errorText ? /* @__PURE__ */ jsx3("span", { id: errorId, role: "alert", className: "vektr-input-error-text", children: errorText }) : helperText ? /* @__PURE__ */ jsx3("span", { id: helperId, className: "vektr-input-helper-text", children: helperText }) : null
    ] });
  }
);
Input.displayName = "Input";

// src/components/Textarea.tsx
import React4, { useId as useId2 } from "react";
import { clsx as clsx3 } from "clsx";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var Textarea = React4.forwardRef(
  ({ label, helperText, errorText, id: customId, className, disabled, ...props }, ref) => {
    const generatedId = useId2();
    const textareaId = customId || generatedId;
    const helperId = `${textareaId}-helper`;
    const errorId = `${textareaId}-error`;
    const describedBy = [
      errorText ? errorId : null,
      helperText && !errorText ? helperId : null
    ].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ jsxs3("div", { className: clsx3("vektr-textarea-wrapper", className), "data-disabled": disabled ? "true" : void 0, children: [
      label && /* @__PURE__ */ jsx4("label", { htmlFor: textareaId, className: "vektr-textarea-label", children: label }),
      /* @__PURE__ */ jsx4(
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
      errorText ? /* @__PURE__ */ jsx4("span", { id: errorId, role: "alert", className: "vektr-textarea-error-text", children: errorText }) : helperText ? /* @__PURE__ */ jsx4("span", { id: helperId, className: "vektr-textarea-helper-text", children: helperText }) : null
    ] });
  }
);
Textarea.displayName = "Textarea";

// src/components/Select.tsx
import React5 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { clsx as clsx4 } from "clsx";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs4(
  SelectPrimitive.Trigger,
  {
    ref,
    className: clsx4("vektr-select-trigger", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx5(SelectPrimitive.Icon, { className: "vektr-select-icon", children: "\u25BC" })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectContent = React5.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx5(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsx5(
  SelectPrimitive.Content,
  {
    ref,
    position,
    className: clsx4("vektr-select-content", className),
    ...props,
    children: /* @__PURE__ */ jsx5(SelectPrimitive.Viewport, { className: "vektr-select-viewport", children })
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectItem = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs4(
  SelectPrimitive.Item,
  {
    ref,
    className: clsx4("vektr-select-item", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx5(SelectPrimitive.ItemText, { children }),
      /* @__PURE__ */ jsx5(SelectPrimitive.ItemIndicator, { className: "vektr-select-indicator", children: "\u2713" })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectLabel = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(
  SelectPrimitive.Label,
  {
    ref,
    className: clsx4("vektr-select-label", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

// src/components/Checkbox.tsx
import React6 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { clsx as clsx5 } from "clsx";
import { jsx as jsx6 } from "react/jsx-runtime";
var Checkbox = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
  CheckboxPrimitive.Root,
  {
    ref,
    className: clsx5("vektr-checkbox", className),
    ...props,
    children: /* @__PURE__ */ jsx6(CheckboxPrimitive.Indicator, { className: "vektr-checkbox-indicator", children: "\u2713" })
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/Radio.tsx
import React7 from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { clsx as clsx6 } from "clsx";
import { jsx as jsx7 } from "react/jsx-runtime";
var RadioGroup = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  RadioGroupPrimitive.Root,
  {
    className: clsx6("vektr-radio-group", className),
    ...props,
    ref
  }
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  RadioGroupPrimitive.Item,
  {
    ref,
    className: clsx6("vektr-radio-item", className),
    ...props,
    children: /* @__PURE__ */ jsx7(RadioGroupPrimitive.Indicator, { className: "vektr-radio-indicator" })
  }
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/Switch.tsx
import React8 from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { clsx as clsx7 } from "clsx";
import { jsx as jsx8 } from "react/jsx-runtime";
var Switch = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  SwitchPrimitives.Root,
  {
    className: clsx7("vektr-switch", className),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx8(SwitchPrimitives.Thumb, { className: "vektr-switch-thumb" })
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;

// src/components/Label.tsx
import React9 from "react";
import { clsx as clsx8 } from "clsx";
import { jsx as jsx9 } from "react/jsx-runtime";
var Label2 = React9.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx9("label", { ref, className: clsx8("vektr-label", className), ...props })
);
Label2.displayName = "Label";

// src/components/Card.tsx
import React10 from "react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { clsx as clsx9 } from "clsx";
import { jsx as jsx10 } from "react/jsx-runtime";
var Card = React10.forwardRef(
  ({ children, variant = "base", asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot2 : "div";
    return /* @__PURE__ */ jsx10(Comp, { ref, "data-variant": variant, className: clsx9("vektr-card", className), ...props, children });
  }
);
Card.displayName = "Card";
var CardHeader = React10.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx10("div", { ref, className: clsx9("vektr-card-header", className), ...props })
);
CardHeader.displayName = "CardHeader";
var CardTitle = React10.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx10("h3", { ref, className: clsx9("vektr-card-title", className), ...props })
);
CardTitle.displayName = "CardTitle";
var CardDescription = React10.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx10("p", { ref, className: clsx9("vektr-card-description", className), ...props })
);
CardDescription.displayName = "CardDescription";
var CardBody = React10.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx10("div", { ref, className: clsx9("vektr-card-body", className), ...props })
);
CardBody.displayName = "CardBody";
var CardFooter = React10.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx10("div", { ref, className: clsx9("vektr-card-footer", className), ...props })
);
CardFooter.displayName = "CardFooter";

// src/components/Badge.tsx
import React11 from "react";
import { Slot as Slot3 } from "@radix-ui/react-slot";
import { clsx as clsx10 } from "clsx";
import { jsx as jsx11 } from "react/jsx-runtime";
var Badge = React11.forwardRef(
  ({ children, variant = "success", asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot3 : "span";
    return /* @__PURE__ */ jsx11(
      Comp,
      {
        ref,
        "data-variant": variant,
        className: clsx10("vektr-badge", className),
        ...props,
        children
      }
    );
  }
);
Badge.displayName = "Badge";

// src/components/Alert.tsx
import React12 from "react";
import { clsx as clsx11 } from "clsx";
import { jsx as jsx12 } from "react/jsx-runtime";
var Alert = React12.forwardRef(
  ({ className, variant = "info", ...props }, ref) => /* @__PURE__ */ jsx12(
    "div",
    {
      ref,
      role: "alert",
      "data-variant": variant,
      className: clsx11("vektr-alert", className),
      ...props
    }
  )
);
Alert.displayName = "Alert";
var AlertTitle = React12.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx12("h5", { ref, className: clsx11("vektr-alert-title", className), ...props })
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React12.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx12("div", { ref, className: clsx11("vektr-alert-description", className), ...props })
);
AlertDescription.displayName = "AlertDescription";

// src/components/Avatar.tsx
import React13 from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { clsx as clsx12 } from "clsx";
import { jsx as jsx13 } from "react/jsx-runtime";
var Avatar = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx13(
  AvatarPrimitive.Root,
  {
    ref,
    className: clsx12("vektr-avatar", className),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx13(
  AvatarPrimitive.Image,
  {
    ref,
    className: clsx12("vektr-avatar-image", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx13(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: clsx12("vektr-avatar-fallback", className),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// src/components/Dialog.tsx
import React14 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { clsx as clsx13 } from "clsx";
import { jsx as jsx14, jsxs as jsxs5 } from "react/jsx-runtime";
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx14(
  DialogPrimitive.Overlay,
  {
    ref,
    className: clsx13("vektr-dialog-overlay", className),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React14.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs5(DialogPortal, { children: [
  /* @__PURE__ */ jsx14(DialogOverlay, {}),
  /* @__PURE__ */ jsxs5(
    DialogPrimitive.Content,
    {
      ref,
      className: clsx13("vektr-dialog-content", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx14(DialogPrimitive.Close, { className: "vektr-dialog-close", children: "\u2715" })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = React14.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx14("div", { ref, className: clsx13("vektr-dialog-header", className), ...props })
);
DialogHeader.displayName = "DialogHeader";
var DialogTitle = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx14(
  DialogPrimitive.Title,
  {
    ref,
    className: clsx13("vektr-dialog-title", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx14(
  DialogPrimitive.Description,
  {
    ref,
    className: clsx13("vektr-dialog-description", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/Drawer.tsx
import React15 from "react";
import * as DialogPrimitive2 from "@radix-ui/react-dialog";
import { clsx as clsx14 } from "clsx";
import { jsx as jsx15, jsxs as jsxs6 } from "react/jsx-runtime";
var Drawer = DialogPrimitive2.Root;
var DrawerTrigger = DialogPrimitive2.Trigger;
var DrawerClose = DialogPrimitive2.Close;
var DrawerContent = React15.forwardRef(({ className, children, side = "right", ...props }, ref) => /* @__PURE__ */ jsxs6(DialogPrimitive2.Portal, { children: [
  /* @__PURE__ */ jsx15(DialogPrimitive2.Overlay, { className: "vektr-drawer-overlay" }),
  /* @__PURE__ */ jsxs6(
    DialogPrimitive2.Content,
    {
      ref,
      "data-side": side,
      className: clsx14("vektr-drawer-content", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx15(DialogPrimitive2.Close, { className: "vektr-drawer-close", children: "\u2715" })
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = React15.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx15("div", { ref, className: clsx14("vektr-drawer-header", className), ...props })
);
DrawerHeader.displayName = "DrawerHeader";
var DrawerTitle = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx15(
  DialogPrimitive2.Title,
  {
    ref,
    className: clsx14("vektr-drawer-title", className),
    ...props
  }
));
DrawerTitle.displayName = DialogPrimitive2.Title.displayName;
var DrawerDescription = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx15(
  DialogPrimitive2.Description,
  {
    ref,
    className: clsx14("vektr-drawer-description", className),
    ...props
  }
));
DrawerDescription.displayName = DialogPrimitive2.Description.displayName;

// src/components/Dropdown.tsx
import React16 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { clsx as clsx15 } from "clsx";
import { jsx as jsx16 } from "react/jsx-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuContent = React16.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx16(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx16(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: clsx15("vektr-dropdown-content", className),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx16(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: clsx15("vektr-dropdown-item", className),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuSeparator = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx16(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: clsx15("vektr-dropdown-separator", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

// src/components/Tooltip.tsx
import React17 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { clsx as clsx16 } from "clsx";
import { jsx as jsx17 } from "react/jsx-runtime";
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React17.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx17(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: clsx16("vektr-tooltip-content", className),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/components/Popover.tsx
import React18 from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { clsx as clsx17 } from "clsx";
import { jsx as jsx18 } from "react/jsx-runtime";
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React18.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx18(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx18(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: clsx17("vektr-popover-content", className),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// src/components/Tabs.tsx
import React19 from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { clsx as clsx18 } from "clsx";
import { jsx as jsx19 } from "react/jsx-runtime";
var Tabs = TabsPrimitive.Root;
var TabsList = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx19(
  TabsPrimitive.List,
  {
    ref,
    className: clsx18("vektr-tabs-list", className),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx19(
  TabsPrimitive.Trigger,
  {
    ref,
    className: clsx18("vektr-tabs-trigger", className),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx19(
  TabsPrimitive.Content,
  {
    ref,
    className: clsx18("vektr-tabs-content", className),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// src/components/Accordion.tsx
import React20 from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { clsx as clsx19 } from "clsx";
import { jsx as jsx20, jsxs as jsxs7 } from "react/jsx-runtime";
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React20.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx20(
  AccordionPrimitive.Item,
  {
    ref,
    className: clsx19("vektr-accordion-item", className),
    ...props
  }
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;
var AccordionTrigger = React20.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx20(AccordionPrimitive.Header, { className: "vektr-accordion-header", children: /* @__PURE__ */ jsxs7(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: clsx19("vektr-accordion-trigger", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx20("span", { className: "vektr-accordion-icon", children: "\u25BC" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React20.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx20(
  AccordionPrimitive.Content,
  {
    ref,
    className: clsx19("vektr-accordion-content", className),
    ...props,
    children: /* @__PURE__ */ jsx20("div", { className: "vektr-accordion-body", children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/Table.tsx
import React21 from "react";
import { clsx as clsx20 } from "clsx";
import { jsx as jsx21 } from "react/jsx-runtime";
var Table = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx21("div", { className: "vektr-table-wrapper", children: /* @__PURE__ */ jsx21("table", { ref, className: clsx20("vektr-table", className), ...props }) })
);
Table.displayName = "Table";
var TableHeader = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx21("thead", { ref, className: clsx20("vektr-table-header", className), ...props })
);
TableHeader.displayName = "TableHeader";
var TableBody = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx21("tbody", { ref, className: clsx20("vektr-table-body", className), ...props })
);
TableBody.displayName = "TableBody";
var TableFooter = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx21("tfoot", { ref, className: clsx20("vektr-table-footer", className), ...props })
);
TableFooter.displayName = "TableFooter";
var TableRow = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx21("tr", { ref, className: clsx20("vektr-table-row", className), ...props })
);
TableRow.displayName = "TableRow";
var TableHead = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx21("th", { ref, className: clsx20("vektr-table-head", className), ...props })
);
TableHead.displayName = "TableHead";
var TableCell = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx21("td", { ref, className: clsx20("vektr-table-cell", className), ...props })
);
TableCell.displayName = "TableCell";

// src/components/Toast.tsx
import { createContext as createContext2, useContext as useContext2, useState as useState2 } from "react";
import { jsx as jsx22, jsxs as jsxs8 } from "react/jsx-runtime";
var ToastContext = createContext2(void 0);
var ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState2([]);
  const toast = (message) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...message, id };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4e3);
  };
  return /* @__PURE__ */ jsxs8(ToastContext.Provider, { value: { toast }, children: [
    children,
    /* @__PURE__ */ jsx22("div", { className: "vektr-toast-container", "aria-live": "polite", children: toasts.map((t) => /* @__PURE__ */ jsxs8("div", { "data-variant": t.variant || "info", className: "vektr-toast", children: [
      /* @__PURE__ */ jsx22("div", { className: "vektr-toast-title", children: t.title }),
      t.description && /* @__PURE__ */ jsx22("div", { className: "vektr-toast-description", children: t.description })
    ] }, t.id)) })
  ] });
};
var useToast = () => {
  const context = useContext2(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
};

// src/components/Skeleton.tsx
import React23 from "react";
import { clsx as clsx21 } from "clsx";
import { jsx as jsx23 } from "react/jsx-runtime";
var Skeleton = React23.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx23("div", { ref, className: clsx21("vektr-skeleton", className), ...props })
);
Skeleton.displayName = "Skeleton";

// src/components/Separator.tsx
import React24 from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { clsx as clsx22 } from "clsx";
import { jsx as jsx24 } from "react/jsx-runtime";
var Separator2 = React24.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx24(
  SeparatorPrimitive.Root,
  {
    ref,
    decorative,
    orientation,
    className: clsx22("vektr-separator", className),
    ...props
  }
));
Separator2.displayName = SeparatorPrimitive.Root.displayName;

// src/components/Pagination.tsx
import React25 from "react";
import { clsx as clsx23 } from "clsx";
import { jsx as jsx25 } from "react/jsx-runtime";
var Pagination = React25.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx25("nav", { ref, "aria-label": "pagination", className: clsx23("vektr-pagination", className), ...props })
);
Pagination.displayName = "Pagination";
var PaginationContent = React25.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx25("ul", { ref, className: clsx23("vektr-pagination-content", className), ...props })
);
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React25.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx25("li", { ref, className: clsx23("vektr-pagination-item", className), ...props })
);
PaginationItem.displayName = "PaginationItem";
var PaginationLink = React25.forwardRef(
  ({ className, isActive, ...props }, ref) => /* @__PURE__ */ jsx25(
    "a",
    {
      ref,
      "aria-current": isActive ? "page" : void 0,
      "data-active": isActive ? "true" : void 0,
      className: clsx23("vektr-pagination-link", className),
      ...props
    }
  )
);
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = React25.forwardRef(
  ({ className, children = "\u2039 Previous", ...props }, ref) => /* @__PURE__ */ jsx25(PaginationLink, { ref, className: clsx23("vektr-pagination-prev", className), ...props, children })
);
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = React25.forwardRef(
  ({ className, children = "Next \u203A", ...props }, ref) => /* @__PURE__ */ jsx25(PaginationLink, { ref, className: clsx23("vektr-pagination-next", className), ...props, children })
);
PaginationNext.displayName = "PaginationNext";

// src/components/Breadcrumb.tsx
import React26 from "react";
import { clsx as clsx24 } from "clsx";
import { jsx as jsx26 } from "react/jsx-runtime";
var Breadcrumb = React26.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx26("nav", { ref, "aria-label": "breadcrumb", className: clsx24("vektr-breadcrumb", className), ...props })
);
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React26.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx26("ol", { ref, className: clsx24("vektr-breadcrumb-list", className), ...props })
);
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React26.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx26("li", { ref, className: clsx24("vektr-breadcrumb-item", className), ...props })
);
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React26.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx26("a", { ref, className: clsx24("vektr-breadcrumb-link", className), ...props })
);
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React26.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx26(
    "span",
    {
      ref,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: clsx24("vektr-breadcrumb-page", className),
      ...props
    }
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = ({ children = "/", className, ...props }) => /* @__PURE__ */ jsx26("li", { role: "presentation", "aria-hidden": "true", className: clsx24("vektr-breadcrumb-separator", className), ...props, children });
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
export {
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
  Label2 as Label,
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
  Separator2 as Separator,
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
};
