/**
 * LifeStation Design System Tokens
 * Generated from Figma Dev Mode
 */

export const tokens = {
  colors: {
    // Primary Brand Colors
    brand: {
      maroon: "#b92a71",
      maroonCategory: "#eacfdd",
      maroonDivider: "#fec1df",
    },

    // Semantic Colors
    success: {
      green: "#00a63e",
      greenCategory: "#7bf1a8",
      greenDivider: "#008230",
      greenStroke: "#05df72",
      cardGreenBg: "#dcfce7",
      footerGreyGreen: "#edf1ef",
    },

    error: {
      red: "#e7000b",
      warningOrange: "#f54900",
      warningBg: "#ffedd4",
      warningStroke: "#ff8904",
      cardRedBg: "#ffe2e2",
      cardRedStroke: "#ff6467",
    },

    info: {
      blue: "#0057c2",
      iconBlue: "#0284c7",
      iconBgBlue: "#dfeef7",
      blueChipAction: "#006aa1",
      cardBlueBg: "#dbeafe",
      cardBlueStroke: "#3b82f6",
      iconContainerBg: "#cce2ee",
      contentContainerBgLgtBlue: "#f8fafc",
    },

    // Grey Scale
    grey: {
      greyDivider: "#738ba5",
      categoryGrey: "#b3bdc7",
      navGrey: "#415972",
      footerLightGreyBg: "#eeeeee",
      textAa183_4: "#dddddd",
      bgAa183_4: "#7a7a7a",
      tipText: "#656565",
      primaryGreyBg: "#415972",
      containerGreyStroke: "#909090",
      secondaryGreySolid: "#d4d4d8",
      navDivider: "#677a8e",
    },

    // Base Colors
    base: {
      white: "#ffffff",
      cardText: "#1d1d1d",
      iconDefault: "#0f0f0f",
      textDefault: "#1e1e1e",
      black200: "#0c0c0d1a",
      black100: "#0c0c0d0d",
      gridPlaceholderBg: "#f1f4f8",
    },

    // WCAG Compliant Colors
    wcag: {
      patternDiagonalForeground: "#666666",
      patternCrosshatchForeground: "#555555",
      visualTextForegroundColor: "#ffffff",
    },

    // Neutral System Colors
    neutral: {
      default: "#303030",
      onNeutralTertiary: "#434343",
      onNeutralSecondary: "#303030",
      tertiary: "#e3e3e3",
      tertiaryHover: "#cdcdcd",
      secondary: "#cdcdcd",
      disabled: "#b3b3b3",
      onDisabled: "#b3b3b3",
    },

    // Border Colors
    border: {
      default: "#d9d9d9",
      neutral: "#303030",
      neutralSecondary: "#767676",
      neutralTertiary: "#b2b2b2",
      disabled: "#b3b3b3",
      brand: "#2c2c2c",
    },

    // Background Colors
    background: {
      default: "#ffffff",
      brand: "#2c2c2c",
      brandHover: "#1e1e1e",
      disabled: "#d9d9d9",
      neutralTertiary: "#e3e3e3",
      neutralSecondary: "#cdcdcd",
    },

    // Text Colors
    text: {
      default: "#1e1e1e",
      neutral: "#303030",
      brand: "#f5f5f5",
      onBrand: "#f5f5f5",
      disabled: "#b3b3b3",
      onNeutralTertiary: "#434343",
      onNeutralSecondary: "#303030",
    },

    // UI Element Colors
    ui: {
      scrollHandle: "#d9d9db",
      scrollBase: "#f2f3f5",
      inputLabelDefault: "#0f0f0f",
      inputTextUnfilled: "#5b5b5c",
    },
  },

  typography: {
    fontFamily: {
      primary: "Inter",
      mono: "Roboto Mono",
    },

    fontSize: {
      12: "12px",
      14: "14px",
      16: "16px",
      20: "20px",
    },

    fontWeight: {
      regular: 400,
      medium: 500,
      strong: 600,
    },

    lineHeight: {
      16: "16px",
      20: "20px",
      24: "24px",
      32: "32px",
      40: "40px",
    },
  },

  spacing: {
    0: "0px",
    4: "4px",
    8: "8px",
    12: "12px",
    16: "16px",
    24: "24px",
  },

  borderRadius: {
    2: "2px",
    5: "5px",
    8: "8px",
    10: "10px",
    full: "9999px",
  },

  borderWidth: {
    1: "1px",
    2: "2px",
    3: "3px",
  },

  shadows: {
    sm: "0px 1px 4px rgba(12, 12, 13, 0.04), 0px 1px 4px rgba(12, 12, 13, 0.10)",
  },

  // Component-specific tokens
  components: {
    button: {
      height: "52px",
      padding: "12px 20px",
      borderRadius: "8px",
    },

    systemMessage: {
      height: "46px",
      padding: "12px 24px",
    },

    input: {
      borderRadius: "8px",
      height: {
        default: "60px",
        large: "86px",
      },
    },
  },
} as const;

export type DesignTokens = typeof tokens;
