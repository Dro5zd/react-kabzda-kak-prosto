import React from 'react';

type OnOffType = {
    on: boolean
    callback: (on: boolean) => void
}

export const OnOff = (props: OnOffType) => {

    const onStyle = {
        height: '60px',
        width: '150px',
        border: '2px solid black ',
        display: 'inline-block',
        marginLeft: '50px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        height: '60px',
        width: '150px',
        border: '2px solid black ',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: !props.on ? 'red' : 'white'
    }
    const indicatorStyle = {
        height: '20px',
        width: '20px',
        border: '2px solid black ',
        borderRadius: '50%',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.callback(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                props.callback(false)
            }}>Off
            </div>
            <div style={indicatorStyle}>p</div>
        </div>
    );
};