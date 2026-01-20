import React from "react";

export interface BatchCounterProps {
  /**
   * Current batch count number
   */
  count: number;

  /**
   * Optional label text
   * @default "Batch Count"
   */
  label?: string;

  /**
   * Custom class names for styling
   */
  className?: string;
}

/**
 * BatchCounter Component
 *
 * Displays the current batch count in a prominent black container with large typography.
 * Used in warehouse workflow screens to show the number of items currently in the batch.
 *
 * Design System Usage:
 * - Background: Black (#1d1d1d)
 * - Typography: Inter font family with large number display
 * - Label text: 16px, medium weight, uppercase
 * - Count text: 40px (can scale to 60px for larger displays), bold weight
 * - Layout: Centered content with 20px horizontal padding, 22px vertical padding
 *
 * Component Specifications:
 * - Width: 157px (from design)
 * - Height: 97px (from design)
 * - Border radius: 4px
 * - Gap between label and count: 12px
 *
 * State Patterns:
 * - Default: Shows current batch count
 * - Empty: Count shows 0
 * - Active: Count updates in real-time as devices are added/removed
 *
 * Implementation Example:
 * ```tsx
 * // Basic usage
 * <BatchCounter count={15} />
 *
 * // Custom label
 * <BatchCounter count={4} label="Items" />
 *
 * // Large display (60px typography)
 * <BatchCounter
 *   count={27}
 *   style={{
 *     fontSize: '60px',
 *     lineHeight: '72px'
 *   }}
 * />
 * ```
 *
 * Figma Node: 672:46425
 * Component Family: Warehouse workflow controls
 */
const BatchCounter: React.FC<BatchCounterProps> = ({
  count,
  label = "Batch Count",
  className,
  ...props
}) => {
  const containerStyle: React.CSSProperties = {
    width: "157px",
    height: "97px",
    backgroundColor: "#1d1d1d",
    borderRadius: "4px",
    padding: "22px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    color: "white",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "16px",
    textTransform: "uppercase",
    margin: 0,
    letterSpacing: "0.5px",
  };

  const countStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "40px",
    margin: 0,
    letterSpacing: "1px",
  };

  return (
    <div
      style={containerStyle}
      className={className}
      role="status"
      aria-label={`${label}: ${count}`}
      {...props}
    >
      <p style={labelStyle}>{label}</p>
      <p style={countStyle}>{count}</p>
    </div>
  );
};

export default BatchCounter;
