import "./App.scss"
import "bootstrap/dist/js/bootstrap.bundle"
import { useEffect } from "react"
import { App as AntdApp, ConfigProvider } from "antd"
import Routes from "./pages/Routes"
import ScreenLoader from "./components/Misc/ScreenLoader"
import { useAuth } from "./context/Auth"
const AppContent = () => {
  const { message } = AntdApp.useApp()
  const {isAppLoading} = useAuth()
  useEffect(() => {
    window.toastify = (msg, type) => message[type](msg)
  }, [message])

  return (
    isAppLoading
    ? <ScreenLoader/>
    : <Routes/>
  )
}

const App = () => (
  <ConfigProvider theme={{token:{colorPrimary:"#123456"},components:{Button:{ controlOutlineWidth:0}}}}>
    <AntdApp>
      <AppContent />
    </AntdApp>
  </ConfigProvider>
)

export default App