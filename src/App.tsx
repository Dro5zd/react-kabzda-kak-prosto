import React, {useState} from 'react';
import './App.css';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';
import Accordion from './components/Accordion/Accordion';
import {UncontrolledRating, ValuePropsTYpe} from './components/Rating/UnconrolledRating';


function App() {
    const [value, setValue] = useState<ValuePropsTYpe>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
        <div>
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My Friends'}/>*/}
            <hr/>

            <Rating value={value} onClick={setValue}/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} callback={(collapsed)=>{setAccordionCollapsed(!collapsed)}}/>

            <hr/>

            <UncontrolledRating/>
            <UncontrolledAccordion />
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
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
