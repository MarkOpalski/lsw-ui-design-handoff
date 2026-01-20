import React from "react";
import { tokens } from "../../tokens/design-tokens";

export interface SystemMessageProps {
  variant: "warning" | "info" | "notice";
  children: React.ReactNode;
  onDismiss?: () => void;
  dismissible?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const SystemMessage: React.FC<SystemMessageProps> = ({
  variant,
  children,
  onDismiss,
  dismissible = false,
  icon,
  className = "",
}) => {
  const baseStyles = {
    height: tokens.components.systemMessage.height,
    padding: tokens.components.systemMessage.padding,
    fontFamily: tokens.typography.fontFamily.primary,
    fontWeight: tokens.typography.fontWeight.medium,
    fontSize: variant === "notice" ? tokens.fontSize[16] : tokens.fontSize[20],
    lineHeight: tokens.typography.lineHeight[24],
    display: "flex",
    alignItems: "center",
    gap: variant === "info" ? tokens.spacing[8] : "27px",
    position: "relative" as const,
    width: "100%",
    maxWidth: "1150px",
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "warning":
        return {
          backgroundColor: "#fdba74", // warning-bg
          color: "#0a0a0a",
        };
      case "notice":
        return {
          backgroundColor: "#d9eff6", // light blue
          color: "#0a0a0a",
        };
      case "info":
        return {
          backgroundColor: "transparent",
          color: "#0a0a0a",
        };
      default:
        return {
          backgroundColor: "#fdba74",
          color: "#0a0a0a",
        };
    }
  };

  const getIconStyles = () => {
    const iconBg =
      variant === "warning"
        ? tokens.colors.error.warningOrange
        : tokens.colors.info.iconBlue;

    return {
      width: "16px",
      height: "16px",
      borderRadius: "2px",
      backgroundColor: iconBg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    };
  };

  const DefaultIcons = {
    warning: (
      <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
        <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z" />
      </svg>
    ),
    info: (
      <svg width="8" height="8" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
    notice: (
      <svg width="10" height="8" viewBox="0 0 24 24" fill="white">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
  };

  return (
    <div
      className={className}
      style={{
        ...baseStyles,
        ...getVariantStyles(),
      }}
      role={variant === "warning" ? "alert" : "status"}
      aria-live={variant === "warning" ? "assertive" : "polite"}
    >
      <div style={getIconStyles()}>{icon || DefaultIcons[variant]}</div>

      <div style={{ flex: 1 }}>{children}</div>

      {dismissible && (
        <button
          onClick={onDismiss}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            marginLeft: "auto",
            color: "inherit",
          }}
          aria-label="Dismiss message"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SystemMessage;

// Usage Examples:

export const SystemMessageExamples: React.FC = () => {
  const [messages, setMessages] = React.useState({
    warning: true,
    info: true,
    notice: true,
  });

  const dismissMessage = (type: keyof typeof messages) => {
    setMessages((prev) => ({ ...prev, [type]: false }));
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <h2>System Message Examples</h2>

      {messages.warning && (
        <SystemMessage
          variant="warning"
          dismissible
          onDismiss={() => dismissMessage("warning")}
        >
          Scanning in progress.. be sure to scan all returns accessories with
          the device being returned
        </SystemMessage>
      )}

      {messages.notice && (
        <SystemMessage
          variant="notice"
          dismissible
          onDismiss={() => dismissMessage("notice")}
        >
          Planned System Upgrade. System will be down from MM/MM/YYYY 00:00AM/PM
          — MM/MM/YYYY 00:00AM/PM
        </SystemMessage>
      )}

      {messages.info && (
        <SystemMessage
          variant="info"
          dismissible
          onDismiss={() => dismissMessage("info")}
        >
          Scanning in progress.. be sure to scan all returns accessories with
          the device being returned
        </SystemMessage>
      )}

      <button
        onClick={() => setMessages({ warning: true, info: true, notice: true })}
        style={{
          padding: "8px 16px",
          background: tokens.colors.success.green,
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          alignSelf: "flex-start",
        }}
      >
        Reset Messages
      </button>
    </div>
  );
};
