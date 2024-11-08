import React from 'react';
import './styles/App.css';
import Navigation from "./components/Navigation";
import Main from "./pages/Main";
import Section1 from "./pages/Section1";
import Banner from "./pages/Banner";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Section3v1 from "./pages/Section3v1";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Main/>
            <Section1/>
            <Banner/>
            <Section2/>
            <Section3/>
            <Section3v1/>
        </div>
    );
}

export default App;
