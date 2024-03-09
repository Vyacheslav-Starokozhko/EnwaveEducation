import './App.scss'
import {Counter} from "./components/Counter/Counter.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Layout from "./components/Layout/Layout.tsx";

function App() {

  return (
        <div className="app">
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
            </Route>
          </Routes>
        </div>
  )
}

export default App
