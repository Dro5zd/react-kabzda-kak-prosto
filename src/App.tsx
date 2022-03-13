import React, {useState} from 'react';
import './App.css';
import {Rating} from './components/Rating/Rating';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';
import Accordion from './components/Accordion/Accordion';
import {UncontrolledRating, ValuePropsTYpe} from './components/Rating/UnconrolledRating';
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';
import {OnOff} from './components/OnOff/OnOff';


function App() {
    const [value, setValue] = useState<ValuePropsTYpe>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    let [on, setOn] = useState(false)

    return (
        <div>
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My Friends'}/>*/}
            <hr/>
            <Rating value={value} onClick={setValue}/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} callback={(collapsed)=>{setAccordionCollapsed(!collapsed)}}/>
            <OnOff on={on} callback={setOn}/>

            <hr/>
            <UncontrolledRating/>
            <UncontrolledAccordion />
            <UncontrolledOnOff />
        </div>
    )
}

// type PageTitlePropsType = {title: string}

// function PageTitle(props:PageTitlePropsType) {
//     console.log("PageTitle rendering")
//     return (
//         <h1>{props.title}</h1>
//     )
// }

export default App;
