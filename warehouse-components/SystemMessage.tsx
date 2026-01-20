/**
 * System Message Component
 *
 * Displays system-wide notifications and alerts for warehouse operations.
 * Supports Warning, IT Notice, and Tip/Info message types.
 *
 * Design System Usage:
 * - Warning: Orange background (#fdba74) with warning icon
 * - IT Notice: Blue background (#d9eff6) with check icon
 * - Tip/Info: Transparent background with info icon
 * - Icon size: 16px square with 2px border radius
 * - Font: Inter Medium, 16px for notices, 20px for warnings/tips
 *
 * Layout:
 * - Height: 46px fixed
 * - Padding: 12px vertical, 24px horizontal
 * - Gap: 27px between icon and text (8px for tips)
 * - Width: 1150px (full container width)
 *
 * @figmaNode 179:4815
 */

type SystemMessageProps = {
  property1?: "Warning" | "IT Notice" | "Tip and info icon";
  message?: string;
  className?: string;
};

export default function SystemMessage({
  property1 = "Warning",
  message = "Scanning in progress.. be sure to scan all returns accessories with the device being returned",
  className = "",
}: SystemMessageProps) {
  // Get configuration based on message type
  const getMessageConfig = () => {
    switch (property1) {
      case "IT Notice":
        return {
          backgroundColor: "#d9eff6",
          iconColor: "#0284c7",
          iconType: "check",
          fontSize: "16px",
          gap: "27px",
          message:
            "Planned System Upgrade. System will be down from MM/MM/YYYY 00:00AM/PM — MM/MM/YYYY 00:00AM/PM",
        };
      case "Tip and info icon":
        return {
          backgroundColor: "transparent",
          iconColor: "#0284c7",
          iconType: "info",
          fontSize: "20px",
          gap: "8px",
          message: message,
        };
      default: // "Warning"
        return {
          backgroundColor: "#fdba74",
          iconColor: "#f54900",
          iconType: "warning",
          fontSize: "20px",
          gap: "27px",
          message: message,
        };
    }
  };

  const config = getMessageConfig();

  const renderIcon = () => {
    const iconStyle = {
      backgroundColor: config.iconColor,
      display: "flex",
      width: "16px",
      height: "16px",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "2px",
      flexShrink: 0,
      color: "white",
      fontSize: "10px",
    };

    switch (config.iconType) {
      case "check":
        return <div style={iconStyle}>✓</div>;
      case "info":
        return (
          <div
            style={{
              ...iconStyle,
              padding: "0 4px",
            }}
          >
            ℹ
          </div>
        );
      case "warning":
      default:
        return <div style={iconStyle}>⚠</div>;
    }
  };

  return (
    <div
      className={`system-message ${className}`}
      style={{
        backgroundColor: config.backgroundColor,
        display: "flex",
        gap: config.gap,
        height: "46px",
        alignItems: "center",
        padding: "12px 24px",
        width: "1150px",
        position: "relative",
      }}
      data-name={`Property 1=${property1}`}
      data-node-id="179:4815"
    >
      {renderIcon()}

      <div
        className="message-text"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: config.fontSize,
          lineHeight: "24px",
          color: "#0a0a0a",
          textAlign: "center",
          position: "relative",
          flexShrink: 0,
          fontFeatureSettings:
            "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv06', 'cv09', 'cv11'",
        }}
      >
        {config.message}
      </div>
    </div>
  );
}

/**
 * Component Usage Examples:
 *
 * // Warning message for ongoing operations
 * <SystemMessage
 *   property1="Warning"
 *   message="Scanning in progress.. be sure to scan all returns accessories with the device being returned"
 * />
 *
 * // System maintenance notice
 * <SystemMessage property1="IT Notice" />
 *
 * // Helpful tip or information
 * <SystemMessage
 *   property1="Tip and info icon"
 *   message="Tip: Use the barcode scanner for faster device identification"
 * />
 */
