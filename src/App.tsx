import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Rating/>
            <Title/>
            <Rating/>
            <Accordion/>
        </div>
    )
}

function Title() {
    return (
        <>This is APP component</>
    )
}


function Rating() {
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
    return (
        <div>star</div>
    )
}


function Accordion() {
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
