# Component Illustrations

This directory contains PNG illustrations for each component displayed on the components index page.

## How It Works

Illustrations are defined in the component schema (`app/config/components.config.ts`) and automatically loaded by the components index page.

## File Naming Convention

Files should be named as specified in the component configuration:

- `alert.png` - Alert component illustration
- `badge.png` - Badge component illustration
- `button.png` - Button component illustration
- `dropdown.png` - Dropdown Menu component illustration
- `input.png` - Input component illustration
- `line-chart.png` - Line Chart component illustration
- `loader.png` - Loader component illustration
- `pin-input.png` - Pin Input component illustration
- `breadcrumb.png` - Breadcrumb component illustration

## Specifications

- **Format**: PNG or JPG (PNG preferred for better quality, JPG for smaller file sizes)
- **Aspect Ratio**: 4:3 (recommended for optimal display)
- **Resolution**: 800x600px (high quality for crisp display on all screens)
- **Style**: Clean, minimal illustrations showing the component in action
- **Colors**: Use theme-neutral colors that work in both light and dark modes
- **Background**: Transparent background recommended

## Design Guidelines

1. **Clarity**: Show the component's primary function and visual appearance
2. **Simplicity**: Avoid unnecessary details, focus on the core component
3. **Consistency**: Maintain consistent illustration style across all components
4. **Accessibility**: Ensure illustrations are clear and recognizable at different sizes
5. **Theme Support**: Use colors that work well in both light and dark themes

## Adding New Component Illustrations

When adding a new component:

1. **Update the schema**: Add `illustration: "component-name.png"` to the component configuration in `app/config/components.config.ts`
2. **Upload the image**: Place the illustration file in this directory with the exact filename specified in the schema
3. **Automatic loading**: The illustration will automatically appear on the components index page

## Fallback

If an illustration file is missing, a generic placeholder icon will be displayed automatically.
