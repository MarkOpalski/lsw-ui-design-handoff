import React from "react";
import { tokens } from "../../tokens/design-tokens";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "disabled" | "loading" | "outline";
  size?: "default" | "small";
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "default",
  icon,
  children,
  onClick,
  disabled = false,
  loading = false,
  type = "button",
  className = "",
}) => {
  const baseStyles = {
    height: tokens.components.button.height,
    padding: tokens.components.button.padding,
    borderRadius: tokens.components.button.borderRadius,
    fontFamily: tokens.typography.fontFamily.primary,
    fontWeight: tokens.typography.fontWeight.medium,
    fontSize: size === "small" ? "14px" : tokens.fontSize[20],
    lineHeight: tokens.typography.lineHeight[24],
    border: "none",
    cursor: disabled || loading ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: icon ? tokens.spacing[8] : "0",
    transition: "all 0.2s ease-in-out",
  };

  const getVariantStyles = () => {
    if (disabled || loading) {
      return {
        backgroundColor: tokens.colors.grey.bgAa183_4,
        color: tokens.colors.grey.textAa183_4,
      };
    }

    switch (variant) {
      case "primary":
        return {
          backgroundColor: tokens.colors.success.green,
          color: tokens.colors.base.white,
        };
      case "secondary":
        return {
          backgroundColor: tokens.colors.grey.primaryGreyBg,
          color: tokens.colors.base.white,
        };
      case "outline":
        return {
          backgroundColor: tokens.colors.grey.footerLightGreyBg,
          color: tokens.colors.base.cardText,
          border: `3px solid ${tokens.colors.base.cardText}`,
        };
      default:
        return {
          backgroundColor: tokens.colors.success.green,
          color: tokens.colors.base.white,
        };
    }
  };

  const LoadingSpinner = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="32"
        strokeDashoffset="32"
        opacity="0.3"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="8"
        strokeDashoffset="8"
      />
    </svg>
  );

  return (
    <button
      type={type}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      className={className}
      style={{
        ...baseStyles,
        ...getVariantStyles(),
      }}
      aria-disabled={disabled || loading}
      aria-label={loading ? "Loading..." : undefined}
    >
      {loading && <LoadingSpinner />}
      {!loading && icon}
      {children}
    </button>
  );
};

export default Button;

// Usage Examples:

export const ButtonExamples: React.FC = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <h2>Button Examples</h2>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {/* Primary Actions */}
        <Button variant="primary">Submit (Enter)</Button>
        <Button variant="primary" size="small">
          Label
        </Button>
        <Button variant="secondary">Continue</Button>

        {/* Outline Actions */}
        <Button variant="outline">Back</Button>
        <Button variant="outline">Cancel</Button>

        {/* States */}
        <Button disabled>Disabled</Button>
        <Button loading>Processing...</Button>

        {/* With Icons */}
        <Button
          variant="secondary"
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 12a8 8 0 018-8V2.5L16 6l-4 3.5V8a6 6 0 100 12 6 6 0 006-6h2a8 8 0 01-16 0z" />
            </svg>
          }
        >
          Retry
        </Button>

        <Button variant="primary" size="small">
          All details
        </Button>
      </div>
    </div>
  );
};
