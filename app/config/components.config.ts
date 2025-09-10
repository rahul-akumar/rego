export type ComponentMeta = {
  name: string;
  description: string;
  path?: string; // Optional override
  dateAdded?: string;
  isNew?: boolean;
  category?: "form" | "feedback" | "data-display" | "navigation" | "chart";
  illustration?: string; // Path to component illustration (e.g., 'button.png')
};

export const componentsConfig: Record<string, ComponentMeta> = {
  "alert": {
    name: "Alert",
    description: "Display important messages and notifications",
    dateAdded: "2025-01-01",
    category: "feedback",
    illustration: "alert.png",
  },
  "badge": {
    name: "Badge",
    description: "Small status descriptors with icons and text support",
    dateAdded: "2025-01-06",
    category: "data-display",
    illustration: "badge.png",
  },
  "button": {
    name: "Button",
    description: "Clickable elements with multiple variants and states",
    dateAdded: "2025-01-01",
    category: "form",
    illustration: "button.png",
  },
  "input": {
    name: "Input",
    description: "Form input elements with validation support",
    dateAdded: "2025-01-01",
    category: "form",
    illustration: "input.png",
  },
  "pin-input": {
    name: "Pin Input",
    description: "Multi-cell input for PIN/OTP codes with paste and masking",
    dateAdded: "2025-08-31",
    isNew: true,
    category: "form",
    illustration: "pin-input.png",
  },
  "breadcrumb": {
    name: "Breadcrumb",
    description: "Displays the path to the current resource using a hierarchy of links.",
    dateAdded: "2025-08-12",
    isNew: true,
    category: "navigation",
    illustration: "breadcrumb.png",
  },
  "throbber": {
    name: "Throbber",
    description: "Animated spinner to indicate background processing",
    dateAdded: "2025-08-16",
    isNew: true,
    category: "feedback",
    illustration: "throbber.png",
  },
  "dropdown-menu": {
    name: "Dropdown Menu",
    description: "Accessible compound dropdown menu with trigger, content, items and keyboard navigation",
    dateAdded: "2025-01-25",
    isNew: true,
    category: "navigation",
    illustration: "dropdown.png",
  },
  "skeleton": {
    name: "Skeleton",
    description: "Loading placeholders with text, rectangle, circle and image shapes for various layouts",
    dateAdded: "2025-01-27",
    isNew: true,
    category: "feedback",
    illustration: "skeleton.png",
  },
};
