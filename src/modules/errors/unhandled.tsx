import "@styles/notfound.scss"
import { Button } from "antd"

const Unhandled = () => {
  return (
    <div className="main-not-found">
      <h1>500</h1>
      <p>Server Error</p>
      <p>It is not possible to process your request from the server side</p>
      <Button type="primary" href="/">
        Return to main page
      </Button>
    </div>
  )
}

export default Unhandled
