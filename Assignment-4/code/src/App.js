import React from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Landingpage from "./component/Landingpage";
import Postview from "./Postview";
function App(){
    return (
        <di className="App" >

            
            <Router>
                <Routes>
                    <Route path="/" element={<Landingpage/>} ></Route>
                    <Route path ="/Postview"element={<Postview></Postview>} ></Route>
                </Routes>
            </Router>
        </di>
    )
}
export default App;