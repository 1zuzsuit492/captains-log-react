import { Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Index from "./Pages/Index";
import Show from "./Pages/Show";

function App(){
    return(
        <div>
            <Router>
                <NavBar/>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logs" element={<Index/>} />
                <Route path="/logs/:index" element={<Show />} />
                </Routes>
                </Router>
        </div>
    )
}
export default App;