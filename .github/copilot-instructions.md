# LifeStation Warehouse UI Design Handoff

## Project Overview

Design handoff package for LifeStation warehouse management system, extracted from Figma Dev Mode. Contains React/TypeScript components, design tokens, and implementation examples for warehouse scanning workflows.

**Not a web application** - this is a component library/documentation repository for developers implementing the LifeStation warehouse UI.

## Architecture & Structure

```
warehouse-components/     # Production-ready React components with Figma node references
design-tokens/           # TypeScript design tokens (warehouseDesignTokens)
examples/               # React and HTML/CSS implementation examples
  react/
  html-css/
docs/                   # Interactive style guide
test-app/              # React test environment (npm start)
component-test/        # Component validation suite
```

## Design System Principles

### State-Based Component System

All warehouse components use **explicit state props** mapped to design tokens, not generic state management:

```tsx
// Correct: State drives styling via design tokens
property1: "E1" | "E2" | "Okay" | "Warning" | "Hold" | "Processing";

// From ProductCardScanAvailable.tsx
const config = getStateConfig(); // Maps state → colors/badges/borders
```

**Key Pattern**: Each state (E1, E2, etc.) has predefined visual config in `design-tokens/warehouse-tokens.ts`:

- Background color
- Border color (always 4px)
- Badge color and text
- Typography specifications

### Design Token Usage

Import from `design-tokens/warehouse-tokens.ts`:

```typescript
import { warehouseDesignTokens } from "./design-tokens/warehouse-tokens";

// Scan states
warehouseDesignTokens.scanStates.error.background; // "#ffe2e2"
warehouseDesignTokens.scanStates.success.badge; // "#00a63e"

// Typography
warehouseDesignTokens.typography.deviceId.fontSize; // "24px"
warehouseDesignTokens.typography.deviceId.letterSpacing; // "1px"
```

**Critical**: Never hardcode colors or spacing - always use token references.

## Component Implementation Patterns

### ProductCardScanAvailable (Core Component)

**8 states**: Okay, E1, E2, RMA, Hold, Warning, Processing, Grid Placeholder

**Design specifics**:

- Dimensions: 274px × 71px (success), auto height (error states)
- Border: 4px solid (state-dependent color)
- Device IDs: 24px, tracking 1px, uppercase, font-weight 900
- Error codes: "EV#####" format validation
- Status badges: 52px × 36px, rounded 2px

```tsx
// State determines ALL visual properties
<ProductCardScanAvailable
  property1="E1" // Triggers red error styling
  deviceId="EV00079" // 24px uppercase with tracking
  description="Console not returned"
/>
```

### SystemMessage Component

**3 types**: Warning, IT Notice, Tip/Info

**Layout rules**:

- Fixed height: 46px
- Width: 1150px (full container)
- Icon-text gap: 27px (warnings/notices), 8px (tips)
- Icon size: 16px square

**Color coding**:

- Warning: Orange (#fdba74)
- IT Notice: Blue (#d9eff6)
- Tip/Info: Transparent

### Footer Component

**15+ variants** for different workflow patterns:

- Cancel-submit
- Back-submit
- Text submissions
- Processing states
- File downloads

**Dimensions**: 1280px × 80px with button combinations

## Critical Workflows

### Scan Available Workflow

```
Landing → Batch Setup → Scan Available → Confirmation
```

Components: ProductCardScanAvailable, BatchCounter, SystemMessage, WorkspaceControls, Footer

### Scan Return Workflow

```
Landing → Return Setup → Scan Return → Defect Classification → Confirmation
```

### Scan Defective Workflow

```
Landing → Defective Setup → Scan Defective → Error Code Entry → Confirmation
```

See `WAREHOUSE_SPECIFICATION.md` for complete workflow details.

## Development Commands

**Test Environment** (`test-app/`):

```bash
cd test-app
npm install
npm start        # Opens React test app at localhost:3000
```

**Component Validation** (`component-test/`):

```bash
cd component-test
npm install
npm start        # Test all components render correctly
```

**No build process** - this is a handoff package, not a deployable app.

## Figma Integration

All components include `@figmaNode` references in comments:

```tsx
/**
 * @figmaNode 179:1950
 */
```

These map to specific Figma design nodes. Reference when clarifying design intent or validating implementation against designs.

## Typography Specifications

**Inter font required** for all components.

**Large numbers** (Device IDs, Batch Counts):

- Font: Inter Black (900)
- Size: 24px
- Letter spacing: 1px
- Transform: Uppercase

**Button text**:

- Size: 20px
- Weights: Regular (400), Medium (500), Strong (600)

**System messages**:

- Responsive: 16px (notices) to 20px (warnings/tips)

## Color System Invariants

**Error states** (E1, E2, RMA):

- Background: #ffe2e2
- Border: #ff6467
- Badge: #e7000b

**Success state** (Okay):

- Background: #dcfce7
- Border: #05df72
- Badge: #00a63e

**Warning state**:

- Background: #ffedd4
- Border: #ff8904
- Badge: #f54900

**Hold state**:

- Background: #dbeafe
- Border: #3b82f6
- Badge: #0057c2

## Common Patterns

### Component State Configuration

Always use switch/case mapping state → visual config:

```tsx
const getStateConfig = () => {
  switch (property1) {
    case "E1":
      return {
        bgColor: "#ffe2e2",
        borderColor: "#ff6467",
        // ... complete config
      };
    // ... other states
  }
};
```

### Spacing System

8px grid system - all spacing must be multiples of 4px:

- Border widths: 4px
- Small gaps: 8px
- Medium gaps: 12px
- Padding: 16px
- Container padding: 24px

### Badge Components

Consistent across all states:

- Dimensions: 52px × 36px
- Border radius: 2px
- Text: Centered, bold, state-specific color

## Key Files Reference

- `WAREHOUSE_SPECIFICATION.md` - Complete workflow documentation
- `COMPONENT_VALIDATION_REPORT.md` - Component test results and known issues
- `design-tokens/warehouse-tokens.ts` - Single source of truth for all design values
- `warehouse-components/` - Production components with inline documentation

## When Adding New Components

1. Create in `warehouse-components/` with Figma node reference
2. Define state types and configuration mapping
3. Use design tokens from `warehouse-tokens.ts` exclusively
4. Include JSDoc with design specifications
5. Add test case in `test-app/src/App.tsx`
6. Validate in component-test environment
7. Update examples in `examples/react/` and `examples/html-css/`

## Testing Checklist

- All 8 ProductCard states render with correct colors
- Typography matches specs (24px device IDs, 1px tracking)
- Border widths are exactly 4px
- Spacing follows 8px grid system
- System messages display correct icon-text gaps
- Footer button combinations work for all variants
- Components match Figma node specifications
