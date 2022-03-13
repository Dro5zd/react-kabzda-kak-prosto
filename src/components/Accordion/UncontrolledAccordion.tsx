import React, {useState} from 'react';

export function UncontrolledAccordion() {

    let [col, setCol] = useState(false)
    const collapsed = () => {
        setCol(!col)
    }
    if (col) {
        return (
            <div>
                <AccordionTitle collapsed={collapsed}/>
                <AccordionBody/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle collapsed={collapsed}/>
            </div>
        )
    }
}

type AccordionTitleProps = {
    collapsed: (col: boolean) => void
}

function AccordionTitle(props: AccordionTitleProps) {
    const onclickColButtonHandler = () => {
        props.collapsed(true)
    }
    return <div>
        <h3 onClick={onclickColButtonHandler}>MENU</h3>
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