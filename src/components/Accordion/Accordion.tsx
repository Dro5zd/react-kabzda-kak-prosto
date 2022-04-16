import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    callback: (col: boolean)=>void
}



export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle titleValue={props.titleValue} collapsed={props.collapsed}
            callback={props.callback}/>
            { !props.collapsed &&  <AccordionBody/>}
        </div>
    )

    function AccordionTitle(props: AccordionPropsType) {
        return <div>
            <h3 onClick={()=>{props.callback(props.collapsed)}}>{props.titleValue}</h3>
        </div>

    }

    function AccordionBody() {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }
}