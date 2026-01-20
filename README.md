# LifeStation Design System Handoff

## Overview

This is a comprehensive design handoff package for the LifeStation warehouse management system, extracted from Figma Dev Mode. The design system includes design tokens, component specifications, code examples, and an interactive style guide.

## Package Contents

### 📁 tokens/

- `design-tokens.ts` - TypeScript design tokens
- `design-tokens.css` - CSS custom properties
- `design-tokens.json` - Design Tokens Community format

### 📁 components/

- Component specifications and documentation
- Usage guidelines and best practices
- States and variants documentation

### 📁 examples/

- `react/` - React component implementations
- `html-css/` - HTML/CSS examples
- Interactive code snippets

### 📁 docs/

- `style-guide.html` - Interactive style guide
- Component documentation
- Usage guidelines

## Design System Hierarchy

The design system follows Atomic Design principles:

- **Atoms**: Basic building blocks (buttons, icons, inputs)
- **Molecules**: Simple groups of atoms (system messages, status indicators)
- **Organisms**: Complex components (navigation, forms)
- **Templates**: Page-level layouts

## Key Features

### Color System

- Semantic color tokens for consistent theming
- Support for light/dark modes
- Accessible color contrasts (WCAG compliance)

### Typography Scale

- Font family: Inter
- Consistent sizing and line heights
- Weight variations (Regular 400, Medium 500, Strong 600)

### Spacing System

- 8px base unit grid system
- Consistent padding and margin values
- Component-specific spacing tokens

### Component States

- Default, hover, active, disabled states
- Loading and processing states
- Error and success feedback

## Getting Started

1. Review the [Interactive Style Guide](docs/style-guide.html)
2. Import design tokens: `import { tokens } from './tokens/design-tokens'`
3. Refer to component specs in `/components/`
4. Use code examples in `/examples/`

## Implementation Notes

- All colors use CSS custom properties for theming
- Components support both React and HTML/CSS implementations
- Design tokens follow the Design Tokens Community format
- All measurements are in pixels unless otherwise specified

## Support

For questions about this design system implementation, refer to the component documentation or reach out to the design team.
