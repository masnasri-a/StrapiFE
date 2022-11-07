import { useState } from "react"
import ContentMenu from "./components/contentMenu"
import CreatePost from "./components/createPost"
import HomeMenu from "./components/home"
import Sidebar from "./components/sidebar"

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(<HomeMenu />)
  const handleOnClickSidebar = (param: any) => {
    if (param == "home") {
      setActiveMenu(<HomeMenu />)
    } else if (param == "create") {
      setActiveMenu(<CreatePost />)
    } else if (param == "show") {
      setActiveMenu(<ContentMenu />)
    }
  }

  return (
    <div>
      <div className="home">
        <Sidebar onCLick={handleOnClickSidebar} />
        <div className="mainMenu"> 
          {
            activeMenu
          }
        </div>
      </div>
    </div>
  )
}
