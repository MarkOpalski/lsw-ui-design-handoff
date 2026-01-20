/**
 * Workspace Controls Component
 *
 * Action buttons for warehouse workflow operations.
 * Provides controls for IMEI entry, removing scans, and clearing batches.
 *
 * Design System Usage:
 * - Button height: 52px fixed
 * - Border radius: 8px
 * - Gap between buttons: 12px
 * - Padding: 20px horizontal, 8px vertical (11px for outlined)
 * - Font: Inter Medium, 20px
 *
 * States:
 * - Default: Transparent background, dark text
 * - Hover: Light grey background (#d4d4d8)
 * - Clicked/Active: Dark grey background (#415972), white text
 * - Disabled: Grey background (#7a7a7a), light grey text
 * - Outlined: Light background with dark border
 *
 * @figmaNode 611:21279
 */

type WorkspaceControlsProps = {
  property1?: "Default" | "Hover" | "Clicked" | "disabled" | "outlined";
  onEnterImei?: () => void;
  onRemoveLastScan?: () => void;
  onClearBatch?: () => void;
  className?: string;
};

export default function WorkspaceControls({
  property1 = "Default",
  onEnterImei,
  onRemoveLastScan,
  onClearBatch,
  className = "",
}: WorkspaceControlsProps) {
  // Get button configuration based on state
  const getButtonConfig = () => {
    switch (property1) {
      case "Hover":
        return {
          backgroundColor: "#d4d4d8",
          borderColor: "transparent",
          textColor: "#1d1d1d",
          padding: "8px 20px",
          borderWidth: "0",
        };
      case "Clicked":
        return {
          backgroundColor: "#415972",
          borderColor: "transparent",
          textColor: "white",
          padding: "8px 20px",
          borderWidth: "0",
        };
      case "disabled":
        return {
          backgroundColor: "#7a7a7a",
          borderColor: "#7a7a7a",
          textColor: "#ddd",
          padding: "8px 20px",
          borderWidth: "3px",
        };
      case "outlined":
        return {
          backgroundColor: "#eee",
          borderColor: "#1d1d1d",
          textColor: "#1d1d1d",
          padding: "11px 23px",
          borderWidth: "3px",
        };
      default: // "Default"
        return {
          backgroundColor: "transparent",
          borderColor: "rgba(238,238,238,0)",
          textColor: "#1d1d1d",
          padding: "8px 20px",
          borderWidth: "3px",
        };
    }
  };

  const config = getButtonConfig();

  const buttonStyle = {
    backgroundColor: config.backgroundColor,
    border: `${config.borderWidth} solid ${config.borderColor}`,
    display: "flex",
    height: "52px",
    alignItems: "center",
    justifyContent: "center",
    padding: config.padding,
    borderRadius: "8px",
    flexShrink: 0,
    cursor: property1 === "disabled" ? "not-allowed" : "pointer",
  };

  const textStyle = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    lineHeight: "24px",
    fontSize: "20px",
    color: config.textColor,
    position: "relative" as const,
    flexShrink: 0,
    fontFeatureSettings: "'cv11'",
  };

  const handleButtonClick = (action: string) => {
    if (property1 === "disabled") return;

    switch (action) {
      case "imei":
        onEnterImei?.();
        break;
      case "remove":
        onRemoveLastScan?.();
        break;
      case "clear":
        onClearBatch?.();
        break;
    }
  };

  return (
    <div
      className={`workspace-controls ${className}`}
      style={{
        display: "flex",
        gap: "12px",
        height: "52px",
        alignItems: "center",
        position: "relative",
      }}
      data-name={`Property 1=${property1}`}
      data-node-id="611:21279"
    >
      {/* Enter IMEI Number Button */}
      <button
        style={buttonStyle}
        onClick={() => handleButtonClick("imei")}
        disabled={property1 === "disabled"}
        className="enter-imei-btn"
      >
        <span style={textStyle}>Enter IMEI number</span>
      </button>

      {/* Remove Last Scan Button */}
      <button
        style={buttonStyle}
        onClick={() => handleButtonClick("remove")}
        disabled={property1 === "disabled"}
        className="remove-scan-btn"
      >
        <span style={textStyle}>Remove last scan</span>
      </button>

      {/* Clear Batch Button */}
      <button
        style={buttonStyle}
        onClick={() => handleButtonClick("clear")}
        disabled={property1 === "disabled"}
        className="clear-batch-btn"
      >
        <span style={textStyle}>Clear Batch</span>
      </button>
    </div>
  );
}

/**
 * Component Usage Examples:
 *
 * // Default state
 * <WorkspaceControls
 *   onEnterImei={() => console.log('Enter IMEI clicked')}
 *   onRemoveLastScan={() => console.log('Remove scan clicked')}
 *   onClearBatch={() => console.log('Clear batch clicked')}
 * />
 *
 * // Hover state (typically handled by CSS)
 * <WorkspaceControls property1="Hover" />
 *
 * // Active/clicked state
 * <WorkspaceControls property1="Clicked" />
 *
 * // Disabled state
 * <WorkspaceControls property1="disabled" />
 *
 * // Outlined style
 * <WorkspaceControls property1="outlined" />
 *
 * Implementation Notes:
 * - Use appropriate button states based on workflow context
 * - Disable controls when batch operations are in progress
 * - Consider keyboard shortcuts for power users
 * - Ensure proper focus management for accessibility
 */
