import LandingPage from "../components/LandingPage";
import ReactGa from "react-ga"
import React, { useEffect } from "react";

const App = () => {
    useEffect(() => {
        ReactGa.initialize('UA-215766266-1');
        ReactGa.pageview(window.location.pathname + window.location.search)
    }, [])

    return <LandingPage/>
}



export default App;
