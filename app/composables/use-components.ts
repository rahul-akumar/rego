import type { ComponentMeta } from "~/config/components.config";

import { componentsConfig } from "~/config/components.config";

export type ComponentItem = {
  name: string;
  path: string;
  description: string;
  isNew: boolean;
  category?: string;
};

export function useComponents() {
  // Auto-generate paths based on component key
  const getDocPath = (componentKey: string, meta: ComponentMeta) => {
    if (meta.path) {
      return meta.path;
    }
    return `/components/${componentKey}`;
  };

  // Check if component is "new" (within last 3 months)
  const isComponentNew = (meta: ComponentMeta) => {
    if (meta.isNew !== undefined) {
      return meta.isNew;
    }
    if (!meta.dateAdded) {
      return false;
    }

    const addedDate = new Date(meta.dateAdded);
    const threeMonthsAgo = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000); // 90 days = ~3 months
    return addedDate > threeMonthsAgo;
  };

  const components = computed<ComponentItem[]>(() => {
    return Object.entries(componentsConfig).map(([key, meta]) => ({
      name: meta.name,
      path: getDocPath(key, meta),
      description: meta.description,
      isNew: isComponentNew(meta),
      category: meta.category,
    })).sort((a, b) => a.name.localeCompare(b.name));
  });

  const componentsByCategory = computed(() => {
    return components.value.reduce((acc, comp) => {
      const category = comp.category || "other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(comp);
      return acc;
    }, {} as Record<string, ComponentItem[]>);
  });

  return {
    components,
    componentsByCategory,
  };
}
export function useComponent(componentKey: string) {
  const meta = componentsConfig[componentKey];

  if (!meta) {
    console.warn(`Component "${componentKey}" not found in components config`);
    return {
      name: componentKey,
      description: `${componentKey} component`,
      category: undefined,
    };
  }

  return {
    name: meta.name,
    description: meta.description,
    category: meta.category,
  };
}
