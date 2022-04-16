import React, {useReducer} from 'react';
import {reducer} from './reducer';

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, dispatch] = useReducer(reducer, false)

    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => {
            dispatch({type: 'TOGGLE-COLLAPSED'})
        }}/>
            {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType ={
    title:string
    onClick: ()=> void
}


function AccordionTitle(props: AccordionTitlePropsType)
    {
        return <div>
            <h3 onClick={()=>{props.onClick()}}>---{props.title}---</h3>
        </div>
    }

function AccordionBody()
    {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }