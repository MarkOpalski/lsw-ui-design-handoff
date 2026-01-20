/**
 * ProductCard - Scan Available (v2)
 *
 * Core warehouse scanning component for available equipment.
 * Supports multiple scan states: OK, E1, E2, RMA, Hold, Warning, Processing, Grid Placeholder
 *
 * Design System Usage:
 * - Scan operation colors: Green (#00a63e), Red (#e7000b), Orange (#f54900), Blue (#0057c2)
 * - Large number typography: 24px, tracking 1px, uppercase
 * - Error codes format: EV + 5 digits
 * - Status badges: 52px x 36px, rounded 2px
 *
 * State Patterns:
 * - Success (OK): Green background, green border, "OK" badge
 * - Error (E1/E2): Red background, red border, error code badge
 * - Warning: Orange background, orange border, warning icon
 * - Hold: Blue background, blue border, wrench icon
 * - Processing: Grey background, spinner icon
 *
 * @figmaNode 179:1950
 */

type ProductCardScanAvailableVProps = {
  property1?:
    | "Okay"
    | "RMA"
    | "Hold"
    | "E1"
    | "E2"
    | "Warning"
    | "Grid Placeholder"
    | "Processing";
  deviceId?: string;
  description?: string;
};

export default function ProductCardScanAvailable({
  property1 = "Okay",
  deviceId = "EV00079",
  description = "Console not returned",
}: ProductCardScanAvailableVProps) {
  // Define state-specific configurations
  const getStateConfig = () => {
    switch (property1) {
      case "E1":
        return {
          bgColor: "#ffe2e2",
          borderColor: "#ff6467",
          badgeColor: "#e7000b",
          badgeText: "E1",
          badgeTextColor: "white",
          description: "Console not returned",
        };
      case "E2":
        return {
          bgColor: "#ffe2e2",
          borderColor: "#ff6467",
          badgeColor: "#e7000b",
          badgeText: "E2",
          badgeTextColor: "white",
          description: "Not found in MPERS",
        };
      case "RMA":
        return {
          bgColor: "#ffe2e2",
          borderColor: "#ff6467",
          badgeColor: "#e7000b",
          badgeText: "RMA",
          badgeTextColor: "white",
          description: "Return to manufacturer",
        };
      case "Hold":
        return {
          bgColor: "#dbeafe",
          borderColor: "#3b82f6",
          badgeColor: "#0057c2",
          badgeText: "🔧",
          badgeTextColor: "white",
          description: "Hold for troubleshooting",
        };
      case "Warning":
        return {
          bgColor: "#ffedd4",
          borderColor: "#ff8904",
          badgeColor: "#f54900",
          badgeText: "⚠",
          badgeTextColor: "white",
          description: "Warning flag",
        };
      case "Processing":
        return {
          bgColor: "#f5f3f0",
          borderColor: "#1d1d1d",
          badgeColor: "#1d1d1d",
          badgeText: "⟳",
          badgeTextColor: "white",
          description: "Processing...",
        };
      case "Grid Placeholder":
        return null; // Return placeholder div
      default: // "Okay"
        return {
          bgColor: "#dcfce7",
          borderColor: "#05df72",
          badgeColor: "#00a63e",
          badgeText: "OK",
          badgeTextColor: "white",
          description: "",
        };
    }
  };

  const config = getStateConfig();

  // Grid placeholder state
  if (property1 === "Grid Placeholder") {
    return (
      <div
        className="product-card-placeholder"
        style={{
          backgroundColor: "#f8fafc",
          height: "71px",
          width: "274px",
          borderRadius: "6px",
          overflow: "hidden",
        }}
        data-name="Property 1=Grid Placeholder"
        data-node-id="391:13171"
      />
    );
  }

  if (!config) return null;

  return (
    <div
      className="product-card-scan-available"
      style={{
        backgroundColor: config.bgColor,
        border: `4px solid ${config.borderColor}`,
        width: "274px",
        height: property1 === "Okay" ? "71px" : "auto",
        padding: "16px",
        borderRadius: "6px",
        boxShadow:
          "0px 4px 8px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        gap: property1 === "Okay" ? "0" : "10.45px",
        overflow: "hidden",
        alignItems: "flex-start",
        justifyContent: property1 === "Okay" ? "center" : "flex-start",
      }}
      data-name={`Property 1=${property1}`}
      data-node-id="179:1950"
    >
      <div
        className="card-content"
        style={{
          display: "flex",
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "space-between",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <div
          className="device-info"
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "1 0 0",
            gap: property1 === "Okay" ? "0" : "12px",
            alignItems: "flex-start",
            minHeight: "1px",
            minWidth: "1px",
            lineHeight: 0,
            fontStyle: "normal",
            color: "#0f172b",
            justifyContent:
              property1 === "Okay" ? "space-between" : "flex-start",
            alignSelf: property1 === "Okay" ? "stretch" : "auto",
          }}
        >
          <div
            className="device-id"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "24px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              lineHeight: "40px",
              color: "#0f172b",
              position: "relative",
              flexShrink: 0,
            }}
          >
            {deviceId}
          </div>
          {property1 !== "Okay" && description && (
            <div
              className="device-description"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#0f172b",
                position: "relative",
                flexShrink: 0,
              }}
            >
              {description}
            </div>
          )}
        </div>

        <div
          className="status-badge"
          style={{
            backgroundColor: config.badgeColor,
            display: "flex",
            flexDirection: "column",
            height: "36px",
            width: "52px",
            alignItems: "center",
            justifyContent: "center",
            padding: property1 === "RMA" ? "0" : "13px 6px",
            borderRadius: "2px",
            position: "relative",
            flexShrink: 0,
          }}
        >
          <div
            className="badge-text"
            style={{
              fontFamily:
                property1 === "RMA"
                  ? "'Inconsolata', sans-serif"
                  : "'Inter', sans-serif",
              fontWeight: property1 === "RMA" ? 700 : 600,
              fontSize: property1 === "RMA" ? "23px" : "20px",
              letterSpacing: property1 === "RMA" ? "0.23px" : "-0.6px",
              textTransform: "uppercase",
              lineHeight: "16px",
              color: config.badgeTextColor,
              position: "relative",
              flexShrink: 0,
            }}
          >
            {config.badgeText}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Component Usage Examples:
 *
 * // Success state
 * <ProductCardScanAvailable property1="Okay" deviceId="EV70001" />
 *
 * // Error states
 * <ProductCardScanAvailable property1="E1" deviceId="EV00079" />
 * <ProductCardScanAvailable property1="E2" deviceId="EV00083" />
 *
 * // Special states
 * <ProductCardScanAvailable property1="RMA" deviceId="EV70002" />
 * <ProductCardScanAvailable property1="Hold" deviceId="EV70003" />
 * <ProductCardScanAvailable property1="Warning" deviceId="EV70004" />
 * <ProductCardScanAvailable property1="Processing" deviceId="EV70005" />
 *
 * // Placeholder for empty grid cells
 * <ProductCardScanAvailable property1="Grid Placeholder" />
 */
