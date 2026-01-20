# Button Component Specification

## Overview

The Button component is a foundational UI element used throughout the LifeStation application for primary actions, secondary actions, and specialized interactions.

## Figma Node ID

`236:7065`

## Component Variants

### Primary Actions

#### Primary Green

- **Background**: `#00a63e` (success-green)
- **Text Color**: `#ffffff` (white)
- **Use Case**: Primary submit actions, confirmations
- **Label**: "Submit (Enter)"

#### Primary Small

- **Background**: `#00a63e` (success-green)
- **Text Color**: `#ffffff` (white)
- **Use Case**: Compact primary actions
- **Label**: "Label"

#### Primary Grey

- **Background**: `#415972` (primary-grey-bg)
- **Text Color**: `#ffffff` (white)
- **Use Case**: Secondary primary actions
- **Label**: "Label"

### Secondary Actions

#### Secondary

- **Background**: `#eeeeee` (footer-light-grey-bg)
- **Border**: `3px solid #1d1d1d` (card-text)
- **Text Color**: `#1d1d1d` (card-text)
- **Use Case**: Secondary actions, alternative options
- **Label**: "Label"

#### Back Outline

- **Background**: `#eeeeee` (footer-light-grey-bg)
- **Border**: `3px solid #1d1d1d` (card-text)
- **Text Color**: `#1d1d1d` (card-text)
- **Use Case**: Navigation back actions
- **Label**: "Back"

#### Cancel Outline

- **Background**: `#eeeeee` (footer-light-grey-bg)
- **Border**: `3px solid #1d1d1d` (card-text)
- **Text Color**: `#1d1d1d` (card-text)
- **Use Case**: Cancellation actions
- **Label**: "Cancel"

#### Button no outline

- **Background**: `#d4d4d8` (secondary-grey-solid)
- **Text Color**: `#1d1d1d` (card-text)
- **Use Case**: Subtle secondary actions
- **Label**: "Label"

### State Variations

#### Disabled

- **Background**: `#7a7a7a` (bg-aa18-3-4)
- **Text Color**: `#dddddd` (text-aa18-3-4)
- **Use Case**: Inactive/unavailable actions
- **Label**: "Continue"

#### Loading States

##### Submitting

- **Background**: Transparent
- **Border**: `3px solid #7a7a7a` (bg-aa18-3-4)
- **Text Color**: `#656565` (tip-text)
- **Icon**: Loading spinner
- **Label**: "Processing…"
- **Width**: `199px`

##### Loading

- **Background**: Transparent
- **Border**: `3px solid #7a7a7a` (bg-aa18-3-4)
- **Text Color**: `#656565` (tip-text)
- **Icon**: Loading spinner
- **Label**: "Loading…"
- **Width**: `199px`

### Special Variants

#### Continue Grey

- **Background**: `#415972` (primary-grey-bg)
- **Text Color**: `#ffffff` (white)
- **Use Case**: Continue/proceed actions
- **Label**: "Continue"

#### Continue (Enter)

- **Background**: `#415972` (primary-grey-bg)
- **Text Color**: `#ffffff` (white)
- **Use Case**: Continue with keyboard hint
- **Label**: "Continue (Enter)"

#### Icon + Primary Grey

- **Background**: `#415972` (primary-grey-bg)
- **Text Color**: `#ffffff` (white)
- **Icon**: Restart icon (white)
- **Use Case**: Actions with accompanying icons
- **Label**: "Retry"
- **Gap**: `6px` between icon and text

#### All Details

- **Background**: `#0057c2` (blue-cta)
- **Text Color**: `#ffffff` (white)
- **Use Case**: Details/view more actions
- **Label**: "All details"
- **Font Size**: `14px` (smaller than standard)
- **Padding**: `8px 15px`
- **Border Radius**: `5px`

## Design Specifications

### Dimensions

- **Height**: `52px`
- **Padding**: `12px 20px` (vertical/horizontal)
- **Border Radius**: `8px`

### Typography

- **Font Family**: Inter
- **Font Weight**: Medium (500)
- **Font Size**: `20px` (default), `14px` (all details variant)
- **Line Height**: `24px`
- **Font Features**: `'cv11'`

### Interactions

- All buttons should have hover states (darker/lighter variants)
- Loading states disable interaction
- Disabled state prevents all interactions
- Focus states for accessibility

### Accessibility

- Minimum 44px touch target (met with 52px height)
- Color contrast meets WCAG AA standards
- Clear visual distinction between states
- Keyboard navigation support
- Screen reader compatible labels

## Usage Guidelines

### When to Use

- **Primary Green**: Main call-to-action, form submissions
- **Primary Grey**: Secondary important actions
- **Secondary/Outline**: Alternative actions, cancellations
- **Loading States**: During async operations
- **Disabled**: When action is temporarily unavailable

### Content Guidelines

- Keep labels concise (1-3 words ideal)
- Use action-oriented language ("Submit", "Continue", "Cancel")
- Include keyboard hints when relevant ("Enter")
- Maintain consistent terminology across similar actions

### Layout Considerations

- Provide adequate spacing around buttons (minimum 8px)
- Align buttons consistently (usually right-aligned for forms)
- Group related actions together
- Consider button hierarchy (primary vs secondary placement)

## Implementation Notes

### CSS Custom Properties

```css
.button-base {
  height: var(--component-button-height);
  padding: var(--component-button-padding);
  border-radius: var(--component-button-border-radius);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-20);
  line-height: var(--line-height-24);
}
```

### Required Assets

- Loading spinner SVG for loading states
- Restart icon SVG for icon variants
- Ensure proper color variables are defined in CSS custom properties

## Related Components

- System Message (for feedback after button actions)
- Form inputs (buttons typically accompany forms)
- Navigation elements (back buttons)

## Design Tokens Used

- `--color-success-green`
- `--color-grey-primary-bg`
- `--color-grey-footer-light-bg`
- `--color-base-white`
- `--color-base-card-text`
- `--component-button-height`
- `--component-button-padding`
- `--component-button-border-radius`
