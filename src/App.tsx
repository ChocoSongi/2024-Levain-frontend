import React from 'react';
import './styles/App.css';
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Test from "./pages/Test";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/test" element={<Test/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
