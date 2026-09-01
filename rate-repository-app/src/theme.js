// theme.js
import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    textLight: "white",

    primary: "#0366d6",
    error: "rgb(221, 62, 78)",
    border: "black",

    appBarBackground: "#24292e",
    appBarText: "white",
    background: "white",
    backgroundSecondary: "#c4c4c4",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  border: {
    radius: 5,
  },
};

export default theme;
