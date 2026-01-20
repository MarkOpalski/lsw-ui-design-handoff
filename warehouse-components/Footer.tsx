/**
 * Footer Component
 *
 * Main footer component for warehouse workflows with various button configurations.
 * Supports scan-to-restart functionality and multiple action button combinations.
 *
 * Design System Usage:
 * - Height: 80px fixed
 * - Background: Light grey (#eee) or white
 * - Border: Top and bottom, #45556c
 * - Padding: 12px vertical, 32px horizontal (90px for white variant)
 * - Button height: 52px, rounded 8px
 * - Font: Inter Medium, 20px for buttons
 *
 * Button States:
 * - Primary Green: #00a63e background, white text
 * - Cancel/Back: Light grey background with dark border
 * - Disabled: Grey background with light text
 * - Processing: With spinner animation
 *
 * Footer Types:
 * - Cancel + Submit combinations
 * - Back + Submit combinations
 * - Text + Submit with counters
 * - Processing states
 * - File download notifications
 *
 * @figmaNode 234:6992
 */

type FooterProps = {
  property1?:
    | "Wht cancel-submit"
    | "text &Submit (enter)"
    | "wht submit"
    | "cancel-submit"
    | "Start Over Footer"
    | "Blank footer"
    | "back-submit"
    | "Cancel-Continue Complete"
    | "Back-Continue Complete"
    | "Submitted Animation"
    | "File Download message"
    | "Cancel-Continue Incomplete"
    | "Back-Continue incomplete"
    | "text & Submit Batch (Enter)"
    | "disabled back-submit";
  onCancel?: () => void;
  onBack?: () => void;
  onSubmit?: () => void;
  onContinue?: () => void;
  onStartOver?: () => void;
  submitCount?: number;
  isProcessing?: boolean;
  className?: string;
};

export default function Footer({
  property1 = "Wht cancel-submit",
  onCancel,
  onBack,
  onSubmit,
  onContinue,
  onStartOver,
  submitCount = 0,
  isProcessing = false,
  className = "",
}: FooterProps) {
  // Get footer configuration
  const getFooterConfig = () => {
    const isWhite = property1.includes("Wht") || property1 === "wht submit";
    const isBlank = property1 === "Blank footer";

    return {
      backgroundColor: isWhite ? "white" : isBlank ? "#eee" : "#eee",
      padding: isWhite ? "12px 90px" : "12px 32px",
      showStartOver:
        !isBlank &&
        !property1.includes("Animation") &&
        !property1.includes("Download"),
      alignment: isBlank ? "center" : "flex-start",
    };
  };

  const config = getFooterConfig();

  // Render start over button
  const renderStartOver = () => {
    if (!config.showStartOver) return null;

    return (
      <button
        onClick={onStartOver}
        className="start-over-btn"
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 0",
          borderRadius: "8px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "24px",
            height: "24px",
            padding: "4px",
            borderRadius: "4px",
            backgroundColor: "rgba(255,255,255,0)",
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              background: "#1d1d1d",
              mask: "url('/icons/barcode.svg') no-repeat center/contain",
            }}
          />
        </div>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "24px",
            color: "black",
            fontFeatureSettings: "'cv11'",
          }}
        >
          Scan to start over
        </span>
      </button>
    );
  };

  // Render action buttons
  const renderActionButtons = () => {
    if (property1 === "Blank footer") return null;

    const buttonStyle = {
      height: "52px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      lineHeight: "24px",
      fontFeatureSettings: "'cv11'",
    };

    const primaryButtonStyle = {
      ...buttonStyle,
      backgroundColor: "#00a63e",
      color: "white",
      padding: "12px 20px",
    };

    const secondaryButtonStyle = {
      ...buttonStyle,
      backgroundColor: "#eee",
      color: "#1d1d1d",
      border: "3px solid #1d1d1d",
      padding: "8px 20px",
    };

    const disabledButtonStyle = {
      ...buttonStyle,
      backgroundColor: "#7a7a7a",
      color: "#ddd",
      cursor: "not-allowed",
      padding: "8px 20px",
    };

    // Handle different footer types
    switch (property1) {
      case "wht submit":
        return (
          <button style={primaryButtonStyle} onClick={onSubmit}>
            Submit (Enter)
          </button>
        );

      case "cancel-submit":
      case "Wht cancel-submit":
        return (
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <button style={secondaryButtonStyle} onClick={onCancel}>
              Cancel
            </button>
            <button style={primaryButtonStyle} onClick={onSubmit}>
              Submit (Enter)
            </button>
          </div>
        );

      case "back-submit":
        return (
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <button style={secondaryButtonStyle} onClick={onBack}>
              Back
            </button>
            <button style={primaryButtonStyle} onClick={onSubmit}>
              Submit (Enter)
            </button>
          </div>
        );

      case "disabled back-submit":
        return (
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <button style={secondaryButtonStyle} onClick={onBack}>
              Back
            </button>
            <button style={disabledButtonStyle} disabled>
              Submit (Enter)
            </button>
          </div>
        );

      case "text &Submit (enter)":
        return (
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <span
              style={{
                fontSize: "20px",
                color: "#0f172a",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Ready to Submit: <strong>{submitCount}</strong>
            </span>
            <button style={primaryButtonStyle} onClick={onSubmit}>
              Submit (Enter)
            </button>
          </div>
        );

      case "text & Submit Batch (Enter)":
        return (
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <span
              style={{
                fontSize: "20px",
                color: "#0f172a",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Ready to Submit: <strong>{submitCount}</strong>
            </span>
            <button style={primaryButtonStyle} onClick={onSubmit}>
              Submit Batch (Enter)
            </button>
          </div>
        );

      case "Cancel-Continue Complete":
        return (
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <button style={secondaryButtonStyle} onClick={onCancel}>
              Cancel
            </button>
            <button
              style={{
                ...buttonStyle,
                backgroundColor: "#415972",
                color: "white",
                padding: "12px 20px",
              }}
              onClick={onContinue}
            >
              Continue (Enter)
            </button>
          </div>
        );

      case "Cancel-Continue Incomplete":
        return (
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <button style={secondaryButtonStyle} onClick={onCancel}>
              Cancel
            </button>
            <button style={disabledButtonStyle} disabled>
              Continue (Enter)
            </button>
          </div>
        );

      case "Back-Continue Complete":
        return (
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <button style={secondaryButtonStyle} onClick={onBack}>
              Back
            </button>
            <button
              style={{
                ...buttonStyle,
                backgroundColor: "#415972",
                color: "white",
                padding: "12px 20px",
              }}
              onClick={onContinue}
            >
              Continue (Enter)
            </button>
          </div>
        );

      case "Back-Continue incomplete":
        return (
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <button style={secondaryButtonStyle} onClick={onBack}>
              Back
            </button>
            <button style={disabledButtonStyle} disabled>
              Continue (Enter)
            </button>
          </div>
        );

      case "Submitted Animation":
        return (
          <button
            style={{
              ...disabledButtonStyle,
              border: "3px solid #7a7a7a",
              width: "199px",
              gap: "8px",
            }}
            disabled
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                animation: "spin 1s linear infinite",
              }}
            >
              ⟳
            </div>
            Processing...
          </button>
        );

      case "File Download message":
        return (
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              fontSize: "20px",
              color: "black",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span>✓</span>
            File downloaded
          </div>
        );

      default:
        return null;
    }
  };

  if (property1 === "Blank footer") {
    return (
      <div
        className={`footer ${className}`}
        style={{
          backgroundColor: config.backgroundColor,
          border: "1px solid #45556c",
          borderLeft: "none",
          borderRight: "none",
          display: "flex",
          flexDirection: "column",
          height: "80px",
          alignItems: config.alignment,
          padding: config.padding,
          width: "1280px",
        }}
        data-name={`Property 1=${property1}`}
        data-node-id="234:6992"
      />
    );
  }

  return (
    <div
      className={`footer ${className}`}
      style={{
        backgroundColor: config.backgroundColor,
        border: "1px solid #45556c",
        borderLeft: "none",
        borderRight: "none",
        display: "flex",
        flexDirection: "column",
        height: "80px",
        alignItems: config.alignment,
        padding: config.padding,
        width: "1280px",
      }}
      data-name={`Property 1=${property1}`}
      data-node-id="234:6992"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          position: "relative",
          flexShrink: 0,
        }}
      >
        {renderStartOver()}
        {renderActionButtons()}
      </div>
    </div>
  );
}

/**
 * Component Usage Examples:
 *
 * // Basic cancel/submit footer
 * <Footer
 *   property1="cancel-submit"
 *   onCancel={() => console.log('Cancel clicked')}
 *   onSubmit={() => console.log('Submit clicked')}
 * />
 *
 * // Submit with counter
 * <Footer
 *   property1="text &Submit (enter)"
 *   submitCount={8}
 *   onSubmit={() => console.log('Submit clicked')}
 * />
 *
 * // Batch submission
 * <Footer
 *   property1="text & Submit Batch (Enter)"
 *   submitCount={15}
 *   onSubmit={() => console.log('Submit batch clicked')}
 * />
 *
 * // Continue workflow
 * <Footer
 *   property1="Cancel-Continue Complete"
 *   onCancel={() => console.log('Cancel clicked')}
 *   onContinue={() => console.log('Continue clicked')}
 * />
 *
 * // Processing state
 * <Footer
 *   property1="Submitted Animation"
 *   isProcessing={true}
 * />
 *
 * // File download notification
 * <Footer property1="File Download message" />
 *
 * CSS for animations:
 * @keyframes spin {
 *   from { transform: rotate(0deg); }
 *   to { transform: rotate(360deg); }
 * }
 */
