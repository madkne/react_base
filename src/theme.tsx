import { ThemeConfig } from "antd"
import { theme } from "antd"

export function customTheme(): ThemeConfig {
  return {
    algorithm: theme.defaultAlgorithm,
    token: {
      fontFamily: "main",
    },
    components: {
      Typography: {
        fontFamily: "main",
      },
      Checkbox: {
        fontFamily: "main",
      },
      Notification: {
        fontFamily: "main",
      },
      Button: {
        fontFamily: "main",
      },
      Statistic: {
        fontFamily: "main",
      },
      Table: {
        fontFamily: "main",
      },
      Form: {
        fontFamily: "main",
      },
      Card: {
        fontFamily: "main",
      },
      Layout: {
        fontFamily: "main",
      },
      Menu: {
        fontFamily: "main",
      },
      Input: {
        fontFamily: "main",
      },
      Dropdown: {
        fontFamily: "main",
      },
      Tabs: {
        fontFamily: "main",
      },
    },
  }
}
