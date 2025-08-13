import type { VariantProps } from "class-variance-authority";

import type { inputVariants } from "../styles/variants/input";

export type InputVariants = VariantProps<typeof inputVariants>;

export type InputProps = {
  modelValue?: string | number;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search" | "file" | "date" | "time" | "datetime-local" | "month" | "week";
  disabled?: boolean;
  size?: InputVariants["size"];
  class?: string;
  id?: string;
  name?: string;
  required?: boolean;
  readonly?: boolean;
  autocomplete?: string;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  pattern?: string;
  maxlength?: number;
  minlength?: number;
};

export type InputEmits = {
  "update:modelValue": [value: string | number];
  "focus": [event: FocusEvent];
  "blur": [event: FocusEvent];
  "input": [event: Event];
  "change": [event: Event];
  "keydown": [event: KeyboardEvent];
  "keyup": [event: KeyboardEvent];
};

// Base input element attributes for extending
export type InputHTMLAttributes = Omit<
  HTMLInputElement,
  keyof InputProps | "onInput" | "onChange" | "onFocus" | "onBlur"
>;
