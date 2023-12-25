
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { customTheme } from "./theme";
import router from "./router/routes"
function App() {

  return (
    <ConfigProvider
      theme={customTheme()}
      // locale={frFR}
      // direction={i18n.language == "fa" ? "rtl" : "ltr"}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
