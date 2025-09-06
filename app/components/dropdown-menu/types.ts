import type { Ref } from "vue";

// Context type for provide/inject
export type DropdownMenuContext = {
  isOpen: Readonly<Ref<boolean>>;
  open: () => void;
  close: () => void;
  toggle: () => void;
  triggerId: string;
  contentId: string;
};

// Main dropdown menu props
export type DropdownMenuProps = {
  defaultOpen?: boolean;
  disabled?: boolean;
  placement?: "bottom-start" | "bottom-end" | "top-start" | "top-end" | "bottom" | "top";
  offset?: number;
  onOpenChange?: (open: boolean) => void;
};

// Trigger component props
export type DropdownMenuTriggerProps = {
  asChild?: boolean;
  disabled?: boolean;
  class?: string;
};

// Content component props
export type DropdownMenuContentProps = {
  class?: string;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  alignOffset?: number;
  avoidCollisions?: boolean;
  sticky?: "partial" | "always";
};

// Item component props
export type DropdownMenuItemProps = {
  disabled?: boolean;
  destructive?: boolean;
  inset?: boolean;
  class?: string;
};

// Separator props
export type DropdownMenuSeparatorProps = {
  class?: string;
};

// Label props
export type DropdownMenuLabelProps = {
  inset?: boolean;
  class?: string;
};

// Shortcut props
export type DropdownMenuShortcutProps = {
  class?: string;
};

// Checkbox item props
export type DropdownMenuCheckboxItemProps = {
  checked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  class?: string;
};

// Radio group props
export type DropdownMenuRadioGroupProps = {
  value?: string;
  onValueChange?: (value: string) => void;
  class?: string;
};

// Radio item props
export type DropdownMenuRadioItemProps = {
  value: string;
  disabled?: boolean;
  class?: string;
};

// Sub menu props
export type DropdownMenuSubProps = {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

// Sub trigger props
export type DropdownMenuSubTriggerProps = {
  disabled?: boolean;
  inset?: boolean;
  class?: string;
};

// Sub content props
export type DropdownMenuSubContentProps = {
  class?: string;
};
