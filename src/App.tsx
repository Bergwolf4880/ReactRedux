import { BrowserRouter, Routes, Route } from "react-router-dom"
import Consult18 from "consult/Consult18/Consult18"
import Lesson19 from "lessons/Lesson19/Lesson19"
import Homework19 from 'homeworks/Homework19/Homework19'

// import Layout from "pages/UsersApp/Layout/Layout"
// import Home from "pages/UsersApp/Home/Home"
// import Users from "pages/UsersApp/Users/Users"

const App = () => {
  return (
    <BrowserRouter>
      <Homework19 />
      
    </BrowserRouter>
  )
}

export default App
