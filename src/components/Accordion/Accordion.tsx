import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            { !props.collapsed &&  <AccordionBody/>}
        </div>
    )

    type AccordionTitleProps = {
        title: string
    }

    function AccordionTitle(props: AccordionTitleProps) {
        return <div>
            <h3>{props.title}</h3>
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