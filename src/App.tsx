import React from 'react';
import './App.css';

function App() {
    console.log("App rendering")
    return (
        <div>
            <Rating/>
            <AppTitle/>
            <Accordion/>
            <Rating/>
        </div>
    )
}

function AppTitle() {
    console.log("AppTitle rendering")
    return (
        <>This is APP component</>
    )
}


function Rating() {
    console.log("Rating rendering")
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>

    )
}

function Star() {
    console.log("Star rendering")
    return (
        <div>star</div>
    )
}


function Accordion() {
    console.log("Accordion rendering")
    return (
        <div>
            <h3>Меню</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
