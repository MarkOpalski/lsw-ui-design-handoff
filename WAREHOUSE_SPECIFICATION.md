# Warehouse Management UI Specification

## Overview

Complete design handoff package for LifeStation Warehouse UI workflows, extracted from Figma design system focusing on scanning operations, error handling, and batch management.

## Core Workflows

### 1. Scan Available Workflow

**Purpose**: Process available devices for warehouse scanning  
**States**: Success, Error (E1, E2), Hold, Warning, Processing

**Navigation Flow**:

```
Landing Page → Batch Setup → Scan Available → Confirmation
```

**Components**:

- ProductCardScanAvailable (8 states)
- BatchCounter (large 60px typography)
- SystemMessage (warnings, notices, tips)
- WorkspaceControls (scan removal, batch clearing)
- Footer (cancel-submit patterns)

### 2. Scan Return Workflow

**Purpose**: Handle device returns with defect tracking
**States**: Return OK, Defective, Processing

**Navigation Flow**:

```
Landing Page → Return Setup → Scan Return → Defect Classification → Confirmation
```

### 3. Scan Defective Workflow

**Purpose**: Process defective devices with error code validation
**States**: Defective, Error validation, Processing

**Navigation Flow**:

```
Landing Page → Defective Setup → Scan Defective → Error Code Entry → Confirmation
```

## Component Library

### ProductCardScanAvailable

**File**: `/warehouse-components/ProductCardScanAvailable.tsx`
**States**: 8 total (Okay, E1, E2, RMA, Hold, Warning, Processing, Grid Placeholder)
**Dimensions**: 274px × 71px (success), auto height (error states)
**Key Features**:

- Error code validation (EV##### pattern)
- State-based color coding
- Typography: 24px device IDs with 1px tracking
- Border width: 4px state-based borders

### SystemMessage

**File**: `/warehouse-components/SystemMessage.tsx`
**Types**: Warning, IT Notice, Tip/Info
**Dimensions**: 1150px × 46px
**Key Features**:

- Icon rendering with 16px size
- Responsive typography (16px-20px)
- Background color coding
- Message prioritization

### WorkspaceControls

**File**: `/warehouse-components/WorkspaceControls.tsx`
**States**: Default, Hover, Clicked, Disabled, Outlined
**Dimensions**: 52px height buttons
**Key Features**:

- IMEI entry functionality
- Scan removal operations
- Batch clearing actions
- State-based styling

### Footer

**File**: `/warehouse-components/Footer.tsx`
**Variants**: 15+ workflow patterns
**Dimensions**: 1280px × 80px
**Key Features**:

- Cancel-submit patterns
- Back-submit navigation
- Text submissions
- Processing states
- File download operations

## Design Tokens

### Color System

**Scan States**:

- Success: Green (#00a63e badge, #dcfce7 background)
- Error: Red (#e7000b badge, #ffe2e2 background)
- Warning: Orange (#f54900 badge, #ffedd4 background)
- Hold: Blue (#0057c2 badge, #dbeafe background)
- Processing: Black (#1d1d1d badge, #f5f3f0 background)

**System Messages**:

- Warning: Orange (#fdba74 background)
- IT Notice: Blue (#d9eff6 background)
- Info: Transparent background

### Typography System

**Large Numbers** (Device IDs, Batch Counts):

- Font: Inter, 900 weight
- Size: 24px (device), 60px (batch)
- Tracking: 1px letter-spacing
- Transform: Uppercase

**Status Badges**:

- Font: Inter, 600 weight
- Size: 20px
- Tracking: -0.6px
- Transform: Uppercase

**Special**: RMA badges use Inconsolata font

### Spacing System

- itemSpacing4: 4px (borders)
- itemSpacing8: 8px (small gaps)
- itemSpacing12: 12px (medium gaps)
- itemSpacing16: 16px (padding)
- itemSpacing20: 20px (button padding)
- itemSpacing24: 24px (container padding)
- itemSpacing32: 32px (page margins)

### Component Dimensions

**Product Cards**: 274px × 71px (success), auto (error)
**Footer**: 1280px × 80px
**System Messages**: 1150px × 46px
**Buttons**: 52px height, 8-20px padding

## Grid Layouts

**Desktop Configurations**:

- 1920px: 5 columns
- 1280px: 4 columns
- 1366px: 4 columns
- Gap: 32px between columns, 103px between rows
- Container padding: 32px

## Error Handling

### Error Codes

**Pattern**: EV##### (EV followed by 5 digits)
**Examples**: EV00079, EV00083, EV00087, EV70001

### Error States

**E1**: General validation error
**E2**: System processing error
**RMA**: Return merchandise authorization required
**Warning**: Caution state, proceed with attention
**Hold**: Processing hold, requires intervention

## Batch Management

### Batch Constraints

**Recommended**: 15 devices per batch
**Maximum**: 50 devices per batch
**Counter**: 60px typography for batch numbers

### Batch Operations

- Start new batch
- Add devices to batch
- Remove devices from batch
- Clear entire batch
- Process batch

## Page Templates

### Landing Page

**Components**: Navigation, workflow selection, system status
**Layout**: Grid-based workflow cards

### Scan Workflows (Steps 1-6)

**Components**: ProductCard grid, BatchCounter, SystemMessage, WorkspaceControls, Footer
**Layout**: Responsive grid with sidebar controls

### Confirmation Screens

**Components**: Summary cards, action buttons, status messages
**Layout**: Centered content with action footer

## Figma References

**Source File**: E69nMlBoHwhNG2RpqiahWY
**Design Page**: node-id 672-36564
**Component Page**: node-id 139-5300

**Key Frames**:

- ProductCard States: Various node IDs
- System Messages: Message notification patterns
- Workspace Controls: Button interaction states
- Footer Patterns: Workflow-specific footers

## Implementation Notes

### Development Environment

- Framework: React + TypeScript
- Styling: CSS-in-JS (styled-components or emotion)
- State Management: React hooks or Redux
- Design Tokens: TypeScript constants

### Code Organization

```
/warehouse-components/
  ProductCardScanAvailable.tsx
  SystemMessage.tsx
  WorkspaceControls.tsx
  Footer.tsx
/design-tokens/
  warehouse-tokens.ts
/pages/
  Landing.tsx
  ScanAvailable.tsx
  ScanReturn.tsx
  ScanDefective.tsx
  Confirmation.tsx
```

### Performance Considerations

- Virtualized grids for large device lists
- Optimistic UI updates for scan operations
- Error boundary components for fault tolerance
- Progressive loading for batch operations

## Testing Strategy

### Component Testing

- Unit tests for all component states
- Visual regression tests
- Accessibility compliance tests
- Error handling edge cases

### Workflow Testing

- End-to-end scan workflows
- Batch operation scenarios
- Error state transitions
- Cross-browser compatibility

### Performance Testing

- Large batch processing
- Grid rendering optimization
- Memory usage monitoring
- Network failure recovery

## Accessibility

### WCAG Compliance

- Color contrast ratios > 4.5:1
- Focus management for scan workflows
- Screen reader support for status updates
- Keyboard navigation for all controls

### Inclusive Design

- Clear visual state indicators
- Multiple feedback channels (color, text, icons)
- Progressive disclosure for complex operations
- Error recovery assistance

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile: iOS Safari 14+, Chrome Mobile 90+

---

_Design handoff package extracted from Figma file E69nMlBoHwhNG2RpqiahWY_  
_Focus: Warehouse management workflows with comprehensive component specifications_
