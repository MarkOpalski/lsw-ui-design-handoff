# System Message Component Specification

## Overview

The System Message component is used to communicate important information, warnings, alerts, and tips to users within the LifeStation application.

## Figma Node ID

`179:4815`

## Component Variants

### Warning Message

- **Background**: `#fdba74` (warning-bg light orange)
- **Text Color**: `#0a0a0a` (near black)
- **Icon Background**: `#f54900` (warning-orange)
- **Icon**: Warning icon (white)
- **Use Case**: Important warnings that require user attention
- **Content**: "Scanning in progress.. be sure to scan all returns accessories with the device being returned"

### IT Notice

- **Background**: `#d9eff6` (light blue)
- **Text Color**: `#0a0a0a` (near black)
- **Icon Background**: `#0284c7` (icon-blue)
- **Icon**: Checkmark icon (white)
- **Use Case**: System announcements, planned maintenance
- **Content**: "Planned System Upgrade. System will be down from MM/MM/YYYY 00:00AM/PM — MM/MM/YYYY 00:00AM/PM"

### Tip and Info

- **Background**: Transparent/white
- **Text Color**: `#0a0a0a` (near black)
- **Icon Background**: `#0284c7` (icon-blue)
- **Icon**: Info icon (white)
- **Use Case**: Helpful tips and informational messages
- **Content**: "Scanning in progress.. be sure to scan all returns accessories with the device being returned"

## Design Specifications

### Dimensions

- **Height**: `46px`
- **Padding**: `12px 24px`
- **Width**: `1150px` (full width container)

### Typography

- **Font Family**: Inter
- **Font Weight**: Medium (500)
- **Font Size**: `20px` (content), `16px` (IT Notice)
- **Line Height**: `24px`
- **Font Features**: `'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv06', 'cv09', 'cv11'`

### Icon Specifications

- **Size**: `16px × 16px`
- **Border Radius**: `2px`
- **Colors**: White icons on colored backgrounds
- **Spacing**: `8px` (tip variant), `27px` (warning/notice variants) from icon to text

### Layout Structure

```
[Icon Background] [Spacing] [Message Content]
    16×16px        8-27px       Variable width
```

## Icon System

### Warning Icon

- **Background**: `#f54900` (warning-orange)
- **Icon**: Warning symbol in white
- **Use Case**: Alerts, cautions, important notices

### Checkmark Icon

- **Background**: `#0284c7` (icon-blue)
- **Icon**: Checkmark/success symbol in white
- **Use Case**: Confirmations, successful operations, announcements

### Info Icon

- **Background**: `#0284c7` (icon-blue)
- **Icon**: Information "i" symbol in white
- **Use Case**: Tips, additional information, helpful context

## Usage Guidelines

### When to Use

- **Warning**: Critical information that affects user workflow
- **IT Notice**: System status updates, maintenance announcements
- **Tip and Info**: Helpful guidance, additional context, tips

### Content Guidelines

- Keep messages concise but informative
- Use clear, actionable language
- Include specific details when relevant (dates, times for maintenance)
- Avoid technical jargon
- Use consistent voice and tone

### Layout Considerations

- Place at top of relevant sections or forms
- Ensure adequate contrast for accessibility
- Don't stack multiple system messages (use single message when possible)
- Consider dismissible vs. persistent messages based on content importance

## Accessibility

### Color Contrast

- All text meets WCAG AA contrast requirements
- Icons have sufficient contrast against backgrounds

### Screen Readers

- Include appropriate ARIA labels
- Ensure icon meaning is conveyed through text or aria-label
- Use role="alert" for urgent warnings
- Use role="status" for informational messages

### Visual Indicators

- Color is not the only indicator of message type
- Icons provide additional visual context
- Clear typography hierarchy

## Implementation Notes

### CSS Classes

```css
.system-message {
  height: var(--component-system-message-height);
  padding: var(--component-system-message-padding);
  display: flex;
  align-items: center;
  gap: var(--space-8);
}

.system-message-warning {
  background-color: var(--color-error-warning-bg);
}

.system-message-info {
  background-color: var(--color-info-icon-bg-blue);
}
```

### Required Assets

- Warning icon SVG
- Checkmark icon SVG
- Info icon SVG
- Proper color tokens defined

### State Management

- Messages may need to be dismissible
- Consider auto-dismiss for temporary notifications
- Persist important system notices until acknowledged

## Related Components

- Alert/Toast notifications (for temporary messages)
- Status indicators (for inline status communication)
- Form validation messages (for field-specific feedback)

## Design Tokens Used

- `--color-error-warning-bg` (#fdba74)
- `--color-error-warning-orange` (#f54900)
- `--color-info-icon-blue` (#0284c7)
- `--color-info-icon-bg-blue` (#d9eff6)
- `--component-system-message-height` (46px)
- `--component-system-message-padding` (12px 24px)
- `--font-family-primary`
- `--font-weight-medium`
- `--font-size-20`
- `--font-size-16`
- `--line-height-24`

## Responsive Behavior

- Full width on desktop (1150px max)
- Wrap content appropriately on smaller screens
- Maintain icon-to-text spacing ratios
- Consider stacking icon above text on very narrow screens

## Animation Considerations

- Gentle fade-in for new messages
- Slide-down animation for persistent notices
- Smooth transitions when dismissing messages
- Avoid jarring or distracting animations for critical warnings
