import "@styles/notfound.scss"
import { Button } from "antd"
import { useTranslation } from "react-i18next"

const NotFound = () => {
  const { t } = useTranslation("validation")
  return (
    <div className="main-not-found">
      <h1>404</h1>
      <p>{t("error.not_found_page")}</p>
      <Button type="primary" href="/">
        Return to main page
      </Button>
    </div>
  )
}

export default NotFound
