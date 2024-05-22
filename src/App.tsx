import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Consult18 from "consult/Consult18/Consult18"
// import Lesson19 from "lessons/Lesson19/Lesson19"
// import Homework19 from 'homeworks/Homework19/Homework19'
import WeatherLayout from 'pages/WeatherApp/WeatherLayout'
import Home from 'pages/WeatherApp/Home/Home'
import Weathers from 'pages/WeatherApp/Weathers/Weathers'


const App = () => {
  return (
    <BrowserRouter>
        <WeatherLayout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/weathers" element={<Weathers />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </WeatherLayout>
    </BrowserRouter>
  )
}

export default App
