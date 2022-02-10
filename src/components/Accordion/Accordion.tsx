import React, {useState} from "react";

function Accordion() {

    let[col, setCol] = useState(false)
     const collapsed = () =>{
        setCol(!col)
}
    if(col){
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
    collapsed: (col: boolean)=>void
}

function AccordionTitle(props: AccordionTitleProps ) {
    const onclickColButtonHandler = () =>{
        props.collapsed(true)
    }
    return <div>
        <h3>'Menu'</h3>
        <button onClick={onclickColButtonHandler}>+</button>
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

export default Accordion