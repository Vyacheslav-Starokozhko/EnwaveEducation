import './App.scss'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Layout from "./components/Layout/Layout.tsx";
import Blog from "./pages/Blog.tsx";
import Forms from "./pages/Forms.tsx";
import Counters from "./pages/Counters.tsx";

function App() {

  return (
        <div className="app">
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='/blog' element={<Blog/>}/>
              <Route path='/counters' element={<Counters/>}/>
              <Route path='/forms' element={<Forms/>}/>
            </Route>
          </Routes>
        </div>
  )
}

export default App
