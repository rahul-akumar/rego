export type ComponentMeta = {
  name: string;
  description: string;
  path?: string; // Optional override
  dateAdded?: string;
  isNew?: boolean;
  category?: "form" | "feedback" | "data-display" | "navigation";
};

export const componentsConfig: Record<string, ComponentMeta> = {
  alert: {
    name: "Alert",
    description: "Display important messages and notifications",
    dateAdded: "2025-01-01",
    category: "feedback",
  },
  badge: {
    name: "Badge",
    description: "Small status descriptors with icons and text support",
    dateAdded: "2025-01-06",
    isNew: true,
    category: "data-display",
  },
  button: {
    name: "Button",
    description: "Clickable elements with multiple variants and states",
    dateAdded: "2025-01-01",
    category: "form",
  },
  input: {
    name: "Input",
    description: "Form input elements with validation support",
    dateAdded: "2025-01-01",
    category: "form",
  },
};
