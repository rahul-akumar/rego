export type ComponentMeta = {
  name: string;
  description: string;
  path?: string; // Optional override
  dateAdded?: string;
  isNew?: boolean;
  category?: "form" | "feedback" | "data-display" | "navigation" | "chart";
  illustration?: string; // Path to component illustration (e.g., 'button.png')
};

// Sidebar/docs use only v1-registry-backed components now.
export const componentsConfig: Record<string, ComponentMeta> = {
  button: {
    name: "Button",
    description: "Clickable elements with multiple variants and states",
    dateAdded: "2025-01-01",
    category: "form",
    illustration: "button.png",
  },
  badge: {
    name: "Badge",
    description: "Small status descriptors with icons and text support",
    dateAdded: "2025-01-06",
    category: "data-display",
    illustration: "badge.png",
  },
  input: {
    name: "Input",
    description: "Form input elements with validation support",
    dateAdded: "2025-01-01",
    category: "form",
    illustration: "input.png",
  },
};
