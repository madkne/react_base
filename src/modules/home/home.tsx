import { useState } from "react"
import "@styles/Home.scss"
import { useTranslation } from "react-i18next"

function Home() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation("common", { keyPrefix: "pages.home" })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://react.dev" target="_blank">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t("count_number", { count })}
        </button>
        <p>
          Edit <code>src/modules/home/home.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">{t("read_docs")}</p>
    </>
  )
}

export default Home
