import React, {useState} from 'react';


type OnOffPropsType = {
    // on: boolean
}

export const OnOff = (props: OnOffPropsType) => {

    let [on, setOn] = useState(false)

    const clickOnButtonOnHandler = () => {
        setOn(true)
    }
    const clickOnButtonOffHandler = () => {
        setOn(false)
    }

    const onStyle = {
        height: '60px',
        width: '150px',
        border: '2px solid black ',
        display: 'inline-block',
        marginLeft: '50px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        height: '60px',
        width: '150px',
        border: '2px solid black ',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: !on ? 'red' : 'white'
    }
    const indicatorStyle = {
        height: '20px',
        width: '20px',
        border: '2px solid black ',
        borderRadius: '50%',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={clickOnButtonOnHandler}>On</div>
            <div style={offStyle} onClick={clickOnButtonOffHandler}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};