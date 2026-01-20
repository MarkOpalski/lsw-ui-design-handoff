/**
 * Warehouse Management Design Tokens
 *
 * Core design tokens for LifeStation Warehouse UI
 * Extracted from Figma design system for warehouse workflows
 */

export const warehouseDesignTokens = {
  // === SCAN OPERATION COLORS ===
  scanStates: {
    success: {
      background: "#dcfce7",
      border: "#05df72",
      badge: "#00a63e",
    },
    error: {
      background: "#ffe2e2",
      border: "#ff6467",
      badge: "#e7000b",
    },
    warning: {
      background: "#ffedd4",
      border: "#ff8904",
      badge: "#f54900",
    },
    hold: {
      background: "#dbeafe",
      border: "#3b82f6",
      badge: "#0057c2",
    },
    processing: {
      background: "#f5f3f0",
      border: "#1d1d1d",
      badge: "#1d1d1d",
    },
    placeholder: {
      background: "#f8fafc",
    },
  },

  // === SYSTEM MESSAGE COLORS ===
  systemMessages: {
    warning: {
      background: "#fdba74",
      icon: "#f54900",
    },
    notice: {
      background: "#d9eff6",
      icon: "#0284c7",
    },
    info: {
      background: "transparent",
      icon: "#0284c7",
    },
  },

  // === BUTTON STATES ===
  buttons: {
    primary: {
      background: "#00a63e",
      text: "white",
    },
    secondary: {
      background: "#eee",
      border: "#1d1d1d",
      text: "#1d1d1d",
    },
    disabled: {
      background: "#7a7a7a",
      text: "#ddd",
    },
    hover: {
      background: "#d4d4d8",
      text: "#1d1d1d",
    },
    active: {
      background: "#415972",
      text: "white",
    },
  },

  // === LAYOUT SPACING ===
  spacing: {
    itemSpacing4: "4px", // Border widths
    itemSpacing8: "8px", // Small gaps
    itemSpacing12: "12px", // Medium gaps
    itemSpacing16: "16px", // Padding
    itemSpacing20: "20px", // Button padding
    itemSpacing24: "24px", // Container padding
    itemSpacing27: "27px", // Icon-text gaps
    itemSpacing32: "32px", // Page margins
  },

  // === TYPOGRAPHY ===
  typography: {
    // Large Numbers (Device IDs, Batch Counts)
    deviceId: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 900,
      fontSize: "24px",
      lineHeight: "40px",
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: "#0f172b",
    },

    // Extra Large Numbers (60px for batch counters)
    batchCount: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 900,
      fontSize: "60px",
      lineHeight: "72px",
      letterSpacing: "1px",
      color: "#0f172b",
    },

    // Status Badge Text
    badge: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "16px",
      letterSpacing: "-0.6px",
      textTransform: "uppercase",
    },

    // RMA Badge (special typography)
    rmaBadge: {
      fontFamily: "'Inconsolata', sans-serif",
      fontWeight: 700,
      fontSize: "23px",
      lineHeight: "16px",
      letterSpacing: "0.23px",
    },

    // Button Text
    button: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "24px",
      fontFeatureSettings: "'cv11'",
    },

    // Description Text
    description: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      color: "#0f172b",
    },

    // System Messages
    systemMessage: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      lineHeight: "24px",
      color: "#0a0a0a",
      fontFeatureSettings:
        "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv06', 'cv09', 'cv11'",
    },

    // Large system messages (20px)
    systemMessageLarge: {
      fontSize: "20px",
    },

    // Small system messages (16px)
    systemMessageSmall: {
      fontSize: "16px",
    },
  },

  // === COMPONENT DIMENSIONS ===
  components: {
    // Product Card
    productCard: {
      width: "274px",
      height: "71px", // Success state
      heightExpanded: "auto", // Error states
      borderRadius: "6px",
      borderWidth: "4px",
      padding: "16px",
      gap: "10.45px", // Error states
      boxShadow:
        "0px 4px 8px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)",
    },

    // Status Badge
    statusBadge: {
      width: "52px",
      height: "36px",
      borderRadius: "2px",
      padding: "13px 6px",
    },

    // Footer
    footer: {
      width: "1280px",
      height: "80px",
      padding: "12px 32px", // Standard
      paddingWhite: "12px 90px", // White variant
      border: "1px solid #45556c",
    },

    // System Message
    systemMessage: {
      width: "1150px",
      height: "46px",
      padding: "12px 24px",
      iconSize: "16px",
      iconBorderRadius: "2px",
    },

    // Workspace Controls
    workspaceControls: {
      buttonHeight: "52px",
      buttonPadding: "8px 20px",
      buttonPaddingOutlined: "11px 23px",
      gap: "12px",
      borderRadius: "8px",
      borderWidth: "3px",
    },
  },

  // === GRID LAYOUT ===
  grid: {
    // Product Card Grid (3x5, 4x5, 5x6 layouts)
    columns: {
      desktop1920: 5,
      desktop1280: 4,
      desktop1366: 4,
    },
    gap: "32px", // Between columns
    rowGap: "103px", // Between rows
    containerPadding: "32px",
  },

  // === COMMON TEXT COLORS ===
  colors: {
    text: {
      primary: "#0f172b",
      secondary: "#0a0a0a",
      muted: "#1d1d1d",
      disabled: "#ddd",
      white: "white",
      black: "black",
    },
    background: {
      light: "#f8fafc",
      grey: "#eee",
      white: "white",
    },
    border: {
      standard: "#45556c",
    },
  },
};

// === WAREHOUSE WORKFLOW CONSTANTS ===
export const warehouseWorkflows = {
  scanStates: [
    "Okay",
    "E1",
    "E2",
    "RMA",
    "Hold",
    "Warning",
    "Processing",
    "Grid Placeholder",
  ],
  errorCodes: {
    pattern: /^EV\d{5}$/, // EV followed by 5 digits
    examples: ["EV00079", "EV00083", "EV00087", "EV70001"],
  },
  batchSizes: {
    recommended: 15,
    maximum: 50,
  },
};

export default warehouseDesignTokens;
