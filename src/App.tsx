import { BrowserRouter, Routes, Route } from "react-router-dom"
import Consult18 from "consult/Consult18/Consult18"

import Layout from "pages/UsersApp/Layout/Layout"
import Home from "pages/UsersApp/Home/Home"
import Users from "pages/UsersApp/Users/Users"

const App = () => {
  return (
    <BrowserRouter>
       
       <Layout>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/users" element={<Users />} />
           <Route path="*" element="Page Not Found" />
         </Routes>
       </Layout>
    </BrowserRouter>
  )
}

export default App
