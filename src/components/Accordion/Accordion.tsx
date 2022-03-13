import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    callback: (col: boolean)=>void
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsed={props.collapsed}
            callback={props.callback}/>
            { !props.collapsed &&  <AccordionBody/>}
        </div>
    )

    type AccordionTitleProps = {
        title: string
        collapsed: boolean
        callback: (col: boolean)=>void
    }

    function AccordionTitle(props: AccordionTitleProps) {
        return <div>
            <h3 onClick={()=>{props.callback(props.collapsed)}}>{props.title}</h3>
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

export default Accordion